import Vuex from 'vuex'
import Vue from 'vue'
import axios from "axios"
import firebase from "firebase"
import Router from 'vue-router'

Vue.use(Router)
Vue.use(Vuex)

import {
  INPUT_ID,
  INPUT_PASSWORD,
  ACCOUNT_SIGN_IN,
  ACCOUNT_SIGN_OUT,
  SEARCH,
  SIGNIN_SUCCESSED,
  SIGNIN_CLOSED,
  ACCOUNT_SIGN_UP,
  ACCOUNT_CREATED
} from './mutation-types'

/**
 * ステートオブジェクト　状態を管理したい変数を宣言する
 * @type {object}
 */
const state = {
  id: "",
  password: "",
  current_user_address: "",
  current_balance: "",
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
  [ACCOUNT_SIGN_IN]({
    commit,
    state
  }) {
    firebase_signin(state.id, state.password);
    commit(SIGNIN_SUCCESSED)
  },
  [ACCOUNT_SIGN_OUT]({
    commit
  }) {
    firebase_signout();
    commit(SIGNIN_CLOSED)
  },
  [ACCOUNT_SIGN_UP]({
    commit,
    state
  }) {
    commit(ACCOUNT_SIGN_UP)
  },
  [ACCOUNT_CREATED]({
    commit
  }) {
    commit(ACCOUNT_CREATED)
  }
}

/**
 * ゲッターオブジェクト　取得したい状態変数のゲッター
 * @type {object}
 */
const getters = {
  //サインイン中のユーザーのethereumアドレス
  current_user_address: state => state.current_user_address,
  //サインイン中のユーザーの健康コインの残高
  current_balance: state => state.current_balance,
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
    state.id = id
  },
  [INPUT_PASSWORD](state, password) {
    state.password = password
  },
  [SIGNIN_SUCCESSED](state) {
    state.isSignIn = true
    state.current_user_address = ""
  },
  [SIGNIN_CLOSED](state) {
    state.isSignIn = false
  },
  [ACCOUNT_SIGN_UP](state) {
    state.account_creating = true
  },
  [ACCOUNT_CREATED](state) {
    state.account_creating = false
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
      },
      err => {
        alert(err.message);
      }
    );
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
