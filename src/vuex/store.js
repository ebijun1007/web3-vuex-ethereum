import Vuex from 'vuex'
import Vue from 'vue'
import axios from "axios"
import Router from 'vue-router'
import firebase from "firebase"
import * as contract from "../contracts/originalCoin.js"
import * as eth from './eth_functions.js'
import * as fitbit from './fitbit_functions.js'
import * as fb from './firebase_functions.js'

Vue.use(Router)
Vue.use(Vuex)

import {
  INPUT_ID,
  INPUT_PASSWORD,
  INPUT_SEND_ADDRESS,
  INPUT_SEND_AMOUNT,
  INPUT_GET_AMOUNT,
  ACCOUNT_SIGN_IN,
  ACCOUNT_SIGN_OUT,
  SIGNIN_SUCCESSED,
  SIGNIN_CLOSED,
  ACCOUNT_SIGN_UP,
  ACCOUNT_CREATED,
  JUNP_TO_SIGNIN,
  JUNP_TO_SIGNUP,
  HTC_GET_BALANCE,
  HTC_SEND,
  HTC_GET,
  ACCESS_TOKEN,
  GET_DAILY_SUMMARY,
  ACHIEVEMENTS_RESET,
  ACHIEVEMENT_DONE
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
  get_amount: "",
  isSignIn: false,
  account_creating: false,
  goals: "",
  summary: "",
  achievements: {
    achievement1: {
      amount: 10,
      isAchieved: false,
      isActive: false
    },
    achievement2: {
      amount: 10,
      isAchieved: false,
      isActive: false
    },
    achievement3: {
      amount: 10,
      isAchieved: false,
      isActive: false
    },
    achievement4: {
      amount: 10,
      isAchieved: false,
      isActive: false
    },
    achievement5: {
      amount: 10,
      isAchieved: false,
      isActive: false
    },
  },
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
  [INPUT_GET_AMOUNT]({
    commit
  }, amount) {
    commit(INPUT_GET_AMOUNT, amount)
  },
  [ACCOUNT_SIGN_IN]({
    commit,
    state
  }) {
    fb.signin(state.user_id, state.user_password).then(results => {
      eth.account_unlock(firebase.auth().currentUser.photoURL, state.user_password)
      commit(SIGNIN_SUCCESSED)
      commit(ACCOUNT_CREATED)
      eth.get_htcBalance(firebase.auth().currentUser.photoURL, contract.address).then(result => {
          commit(HTC_GET_BALANCE, result)
        }),
        fitbit.getInfo().then(results => {
          commit(GET_DAILY_SUMMARY, results.data)
        })
      fb.make_map(state.user_id, state.user_address)
    })
  },
  [ACCOUNT_SIGN_OUT]({
    commit
  }) {
    fb.signout();
    commit(SIGNIN_CLOSED)
  },
  [ACCOUNT_SIGN_UP]({}) {
    eth.account_create(state.user_id, state.user_password).then(results => {
      fb.account_create(results[0], results[1], results[2]).then(results => {})
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
  [HTC_SEND]({
    commit,
    state
  }) {
    fb.signin(state.user_id, state.user_password).then(results => {
      eth.get_sendAddress(state.send_address).then(result => {
        eth.send_htc(state.user_address, result, state.send_amount).then(results => {
          commit(HTC_GET_BALANCE, (Number(state.user_balance) - Number(state.send_amount)))
        })
      })
    })
  },
  [HTC_GET]({
    commit,
    state,
  }) {
    //promise関数内でcommitが使えないためfirebaseをかませてごまかし
    fb.signin(state.user_id, state.user_password).then(results => {
      eth.create_htc(state.user_address, state.get_amount).then(res => {
        commit(HTC_GET_BALANCE, (Number(state.user_balance) + Number(state.get_amount)))
      })
    })
  },
  [HTC_GET_BALANCE]({
    commit,
    state
  }) {
    //promise関数内でcommitが使えないためfirebaseをかませてごまかし
    fb.signin(state.user_id, state.user_password).then(results => {
      eth.get_htcBalance(firebase.auth().currentUser.photoURL, contract.address).then(result => {
        commit(HTC_GET_BALANCE, result)
      })
    })
  },
  [ACHIEVEMENTS_RESET]({
    commit
  }) {
    commit(ACHIEVEMENTS_RESET)
  },
  [ACHIEVEMENT_DONE]({
    commit,
    state
  }, index) {
    eth.create_htc(state.user_address, 10).then(res => {
      commit(HTC_GET_BALANCE, (Number(state.user_balance) + Number(state.achievements[index].amount)))
    })
    commit(ACHIEVEMENT_DONE, index)
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
  account_creating: state => state.account_creating,
  //fitbitの目標
  goals: state => state.goals,
  //fitbitの活動量
  summary: state => state.summary,
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
  [INPUT_GET_AMOUNT](state, amount) {
    state.get_amount = amount
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
  [GET_DAILY_SUMMARY](state, data) {
    state.goals = data.goals
    state.summary = data.summary
  },
  [ACHIEVEMENTS_RESET](state) {
    for (achievement in state.ahievements) {
      achievement.isAchieved = false
    }
  },
  [ACHIEVEMENT_DONE](state, index) {
    state.achievements[index].isAchieved = true;
  },
  [GET_DAILY_SUMMARY](state, data) {
    state.goals = data.goals
    state.summary = data.summary
  },

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
