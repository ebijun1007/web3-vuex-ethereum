export const abi = [{
    "constant": false,
    "inputs": [{
        "name": "_address",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "create",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{
        "name": "_from",
        "type": "address"
      },
      {
        "name": "_to",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
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
  }
]

export const contract_address = "0x3d7ca4cdd726fc70bbc802d197e4622b300a01b8";

export function eth_getCont_hexAddress(_address) {
  var address = _address.slice(2);
  const eth_getCoinBalance = "0x70a08231000000000000000000000000" + address;
  return eth_getCoinBalance;
}

export function eth_createCont_hexAddress(address, amount) {
  var address = address.slice(2);
  var length = amount.length;
  var eth_createNewCoin = "0x0ecaea73000000000000000000000000" + address + "0000000000000000000000000000000000000000000000000000000000000000";
  eth_createNewCoin = eth_createNewCoin.slice(0, -length);
  eth_createNewCoin = eth_createNewCoin + amount.toString(16);
  console.log(eth_createNewCoin)
  return eth_createNewCoin;
}

export function eth_sendCont_hexAddress(from, to, amount) {
  var from = from.slice(2);
  var to = to.slice(2);
  var length = amount.length;
  var eth_sendCoinBalace = "0xbeabacc8000000000000000000000000" + from + "000000000000000000000000" + to + "0000000000000000000000000000000000000000000000000000000000000000";
  eth_sendCoinBalace = eth_sendCoinBalace.slice(0, -length);
  eth_sendCoinBalace = eth_sendCoinBalace + amount.toString(16);
  return eth_sendCoinBalace;
}