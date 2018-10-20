import firebase from "firebase"
import axios from "axios"

/**
 * 自作ファンクション　アクションやミューテーションから呼び出したい関数を書く
 * @type {object}
 */
//Functions

/**
 * firebaseのサインイン機能
 * @param {id,password} num - 数値の引数
 */
export function signin(id, password) {
  return new Promise((resolve, reject) => {
    // console.log("id:" + id, "pass:" + password)
    firebase
      .auth()
      .signInWithEmailAndPassword(
        id + "@example.com",
        password
      )
      .then(
        user => {
          // console.log("sign in")
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
export function signout() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("sign out")
    });
}

export function account_create(id, password, address) {
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

export function make_map(id, address) {
  firebase
    .database()
    .ref("/map/" + id)
    .set({
      address: address
    });
}
