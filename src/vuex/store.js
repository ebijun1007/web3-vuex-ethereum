import Vuex from 'vuex'
import Vue from 'vue'
import axios from "axios"
import firebase from "firebase"
import Router from 'vue-router'
import {
  contract_address,
  eth_getCont_hexAddress,
  eth_createCont_hexAddress,
  eth_sendCont_hexAddress
} from "../contracts/originalCoin.js"

Vue.use(Router)
Vue.use(Vuex)

import {
  INPUT_ID,
  INPUT_PASSWORD,
  INPUT_SEND_ADDRESS,
  INPUT_SEND_AMOUNT,
  ACCOUNT_SIGN_IN,
  ACCOUNT_SIGN_OUT,
  SIGNIN_SUCCESSED,
  SIGNIN_CLOSED,
  ACCOUNT_SIGN_UP,
  ACCOUNT_CREATED,
  JUNP_TO_SIGNIN,
  JUNP_TO_SIGNUP,
  HTC_GET_BALANCE,
  HTC_SEND
} from './mutation-types'

/**
 * ステートオブジェクト　状態を管理したい変数を宣言する
 * @type {object}
 */
const state = {
  user_id: "",
  user_password: "",
  user_address: "",
  user_balance: "",
  send_address: "",
  send_amount: "",
  isSignIn: false,
  account_creating: false
}

/**
 * アクションオブジェクト　外部APIとのやりとりやイベントが発火された後の処理
 * @type {object}
 */
const actions = {
  [INPUT_ID]({
    commit
  }, id) {
    commit(INPUT_ID, id)
  },
  [INPUT_PASSWORD]({
    commit
  }, password) {
    commit(INPUT_PASSWORD, password)
  },
  [INPUT_SEND_ADDRESS]({
    commit
  }, address) {
    commit(INPUT_SEND_ADDRESS, address)
  },
  [INPUT_SEND_AMOUNT]({
    commit
  }, amount) {
    commit(INPUT_SEND_AMOUNT, amount)
  },
  [ACCOUNT_SIGN_IN]({
    commit,
    state
  }) {
    firebase_signin(state.user_id, state.user_password).then(results => {
      eth_account_unlock(firebase.auth().currentUser.photoURL, state.user_password)
      commit(SIGNIN_SUCCESSED)
      commit(ACCOUNT_CREATED)
      eth_get_htcBalance(firebase.auth().currentUser.photoURL, contract_address).then(result => {
        commit(HTC_GET_BALANCE, result)
      })
      firebase_make_map(state.user_id, state.user_address)
    })
  },
  [ACCOUNT_SIGN_OUT]({
    commit
  }) {
    firebase_signout();
    commit(SIGNIN_CLOSED)
  },
  [ACCOUNT_SIGN_UP]({
    commit,
  }) {
    eth_account_create(state.user_id, state.user_password).then(results => {
      firebase_account_create(results[0], results[1], results[2]).then(results => {})
    })
  },
  [ACCOUNT_CREATED]({
    commit
  }) {
    commit(ACCOUNT_CREATED)
  },
  [JUNP_TO_SIGNIN]({
    commit
  }) {
    commit(JUNP_TO_SIGNIN)
  },
  [JUNP_TO_SIGNUP]({
    commit
  }) {
    commit(JUNP_TO_SIGNUP)
  },
  [HTC_GET_BALANCE]({
    commit
  }) {
    balance = eth_get_htcBalance(state.user_address, contract_address)
    commit(HTC_GET_BALANCE(balance))
  },
  [HTC_SEND]({
    commit,
    state
  }) {
    eth_get_sendAddress(state.send_address).then(result => {
      eth_send_htc(state.user_address, result, state.send_amount)
    })
  }
}

/**
 * ゲッターオブジェクト　取得したい状態変数のゲッター
 * @type {object}
 */
const getters = {
  //サインイン中のユーザーのID(表示名)
  user_id: state => state.user_id,
  //サインイン中のユーザーのethereumアドレス
  user_address: state => state.user_address,
  //サインイン中のユーザーの健康コインの残高
  user_balance: state => state.user_balance,
  //サインイン状態(bool)
  signin_successed: state => state.isSignIn,
  //アカウント作成状態（bool)
  account_creating: state => state.account_creating
}

/**
 * ミューテーションオブジェクト　アクションから処理を受け取って、状態変数を書き換える処理を書く
 * @type {object}
 */
const mutations = {
  [INPUT_ID](state, id) {
    state.user_id = id
  },
  [INPUT_PASSWORD](state, password) {
    state.user_password = password
  },
  [INPUT_SEND_ADDRESS](state, address) {
    state.send_address = address
  },
  [INPUT_SEND_AMOUNT](state, amount) {
    state.send_amount = amount
  },
  [SIGNIN_SUCCESSED](state) {
    state.isSignIn = true
    state.user_id = firebase.auth().currentUser.displayName
    state.user_address = firebase.auth().currentUser.photoURL
  },
  [SIGNIN_CLOSED](state) {
    state.isSignIn = false
  },
  [ACCOUNT_SIGN_UP](state) {
    state.account_creating = true
  },
  [ACCOUNT_CREATED](state) {
    state.account_creating = false
  },
  [JUNP_TO_SIGNIN](state) {
    state.account_creating = false
    state.isSignIn = false
  },
  [JUNP_TO_SIGNUP](state) {
    state.account_creating = true
    state.isSignIn = false
  },
  [HTC_GET_BALANCE](state, balance) {
    state.user_balance = balance
  },
  [HTC_SEND]() {

  }
}

/**
 * Vuexの機能をインスタンス化する
 * @type {object}
 */
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

/**
 * 自作ファンクション　アクションやミューテーションから呼び出したい関数を書く
 * @type {object}
 */
//Functions

/**
 * firebaseのサインイン機能
 * @param {id,password} num - 数値の引数
 */
function firebase_signin(id, password) {
  return new Promise((resolve, reject) => {
    console.log("id:" + id, "pass:" + password)
    firebase
      .auth()
      .signInWithEmailAndPassword(
        id + "@example.com",
        password
      )
      .then(
        user => {
          console.log("sign in")
          resolve()
        },
        err => {
          alert(err.message);
        }
      );
  })
}

/**
 * firebaseのログアウト機能
 * @param 
 */
function firebase_signout() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("sign out")
    });
}

function firebase_account_create(id, password, address) {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        id + "@example.com",
        password
      )
      .then(user => {
        var user = firebase.auth().currentUser;
        user
          .updateProfile({
            displayName: id,
            email: id + "@example.com",
            photoURL: address
          })
          .then(function () {
            console.log(created)
            resolve()
          })
          .catch(function (error) {
            // An error happened.
          });
      })
      .catch(error => {
        alert(error.message);
      });
  })
}

function firebase_make_map(id, address) {
  firebase
    .database()
    .ref("/map/" + id)
    .set({
      address: address
    });
}

function eth_account_create(id, password) {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: "http://localhost:8501",
      data: {
        id: "1",
        method: "personal_newAccount",
        params: [password]
      }
    }).then(res => {
      console.log(res.data.result);
      resolve([id, password, res.data.result]);
    });
  })
}

function eth_account_unlock(address, password) {
  axios({
      method: "POST",
      url: "http://localhost:8501",
      data: {
        id: "1",
        method: "personal_unlockAccount",
        params: [address, password]
      }
    })
    .then(res => {
      console.log(res);
      console.log("unlocked");
    })
    .catch(res => {
      console.error(res);
    });
}

function eth_get_htcBalance(address, contract_address) {
  return new Promise((resolve, reject) => {
    axios({
        method: "POST",
        url: "http://localhost:8501",
        data: {
          id: "1",
          method: "eth_call",
          params: [{
              from: address,
              to: contract_address,
              data: eth_getCont_hexAddress(address)
            },
            "latest"
          ]
        }
      })
      .then(res => {
        console.log("getBalanceOfHTC" + parseInt(res.data.result, 16));
        resolve(parseInt(res.data.result, 16));
      })
      .catch(res => {
        console.error(res);
      });
  })
}

function eth_get_sendAddress(address) {
  return new Promise((resolve, reject) => {
    var refstring = "/map/" + address + "/address";
    var dbref = firebase
      .database()
      .ref(refstring);
    dbref.on(
      "value",
      function (snapshot) {
        console.log(snapshot.val());
        if (snapshot.val() == null) {
          eth_address = null;
          alert("存在しないアドレスです");
          reject();
        } else resolve(snapshot.val());
      },
      function (errorObject) {
        console.log("The read failed: " + errorObject.code);
        reject();
      }
    );
  })
}

function eth_send_htc(from, to, amount) {
  return new Promise((resolve, reject) => {
    axios({
        method: "POST",
        url: "http://localhost:8501",
        data: {
          id: "1",
          method: "eth_call",
          params: [{
              // from: '"' + from + '"',
              // from: from,
              // to: contract_address.toString(16),
              // value: (amount.toString(16)),
              data: eth_sendCont_hexAddress(from, to, amount)
            },
            "latest"
          ]
        }
      })
      .then(res => {
        console.log(res);
        resolve(parseInt(res.data.result, 16));
      })
      .catch(res => {
        console.error(res);
      });
  })
}
