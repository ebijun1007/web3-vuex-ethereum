export const abi = [{
  "constant": false,
  "inputs": [{
    "name": "_address",
    "type": "address"
  }, {
    "name": "_value",
    "type": "uint256"
  }],
  "name": "create",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_from",
    "type": "address"
  }, {
    "name": "_to",
    "type": "address"
  }, {
    "name": "_value",
    "type": "uint256"
  }],
  "name": "transfer",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_owner",
    "type": "address"
  }],
  "name": "balanceOf",
  "outputs": [{
    "name": "balance",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}]

export const address = "0xe9a9a5b11ed5add6e79ee9bbc256bbf3971ce09f";

export function getCont_hexAddress(address, flags) {
  var address = address.slice(2);
  const balance = "0x70a08231000000000000000000000000" + address;
  return balance;
}

export function createCont_hexAddress(address, amount) {
  var address = address.slice(2);
  var length = amount.toString(16).length;
  var create = "0x0ecaea73000000000000000000000000" + address + "0000000000000000000000000000000000000000000000000000000000000000";
  create = create.slice(0, -length);
  create = create + Number(amount).toString(16);
  console.log(create)
  return create;
}

export function sendCont_hexAddress(from, to, amount) {
  var from = from.slice(2);
  var to = to.slice(2);
  var length = Number(amount).toString(16).length;
  var send = "0xbeabacc8000000000000000000000000" + from + "000000000000000000000000" + to + "0000000000000000000000000000000000000000000000000000000000000000";
  send = send.slice(0, -length);
  send = send + Number(amount).toString(16);
  console.log(send)
  return send;
}
