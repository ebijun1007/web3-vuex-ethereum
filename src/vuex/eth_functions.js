import axios from "axios"
import firebase from "firebase";
import * as HTC_contract from "../contracts/HealthCoinContracts.js"
import * as fitbit_contract from "../contracts/fitbitContracts.js"



//var IP = "10.70.84.101"
var IP = "192.168.11.8"
var COIN_BASE = "0x757352e78f16e49f6151db415ca63ee89c9b05e5"

export function account_create(id, password) {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: "http://" + IP + ":8501",
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

export function account_unlock(address, password) {
  axios({
      method: "POST",
      url: "http://" + IP + ":8501",
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

export function get_htcBalance(address, contract_address) {
  return new Promise((resolve, reject) => {
    axios({
        method: "POST",
        url: "http://" + IP + ":8501",
        data: {
          id: "1",
          method: "eth_call",
          params: [{
              from: address,
              to: contract_address,
              data: HTC_contract.getCont_hexAddress(address)
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

export function get_sendAddress(address) {
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

export function send_htc(from, to, amount) {
  var data = HTC_contract.sendCont_hexAddress(from, to, amount)
  console.log(data)
  return new Promise((resolve, reject) => {
    axios({
        method: "POST",
        url: "http://" + IP + ":8501",
        data: {
          id: "1",
          method: "eth_sendTransaction",
          params: [{
            from: COIN_BASE,
            to: HTC_contract.address,
            data: data
          }]
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

export function create_htc(address, amount) {
  var data = HTC_contract.createCont_hexAddress(address, amount)
  return new Promise((resolve, reject) => {
    axios({
        method: "POST",
        url: "http://" + IP + ":8501",
        data: {
          id: "1",
          method: "eth_sendTransaction",
          params: [{
            from: COIN_BASE,
            to: HTC_contract.address,
            data: data
          }]
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

export function getFlags(address, contract_address) {
  return new Promise((resolve, reject) => {
    axios({
        method: "POST",
        url: "http://" + IP + ":8501",
        data: {
          id: "1",
          method: "eth_call",
          params: [{
              from: address,
              to: contract_address,
              data: fitbit_contract.getFlags(address)
            },
            "latest"
          ]
        }
      })
      .then(res => {
        console.log("get flags from eth are " + res);
        resolve(res);
      })
      .catch(res => {
        console.error(res);
      });
  })
}
