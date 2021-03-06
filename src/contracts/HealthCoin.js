export const abi = [
  [{
    "constant": true,
    "inputs": [],
    "name": "mintingFinished",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [{
      "name": "",
      "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_spender",
      "type": "address"
    }, {
      "name": "_value",
      "type": "uint256"
    }],
    "name": "approve",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "InitialSupply",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
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
    "name": "transferFrom",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_to",
      "type": "address"
    }, {
      "name": "_amount",
      "type": "uint256"
    }],
    "name": "mint",
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
      "name": "_value",
      "type": "uint256"
    }],
    "name": "burn",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_spender",
      "type": "address"
    }, {
      "name": "_subtractedValue",
      "type": "uint256"
    }],
    "name": "decreaseApproval",
    "outputs": [{
      "name": "success",
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
  }, {
    "constant": false,
    "inputs": [],
    "name": "finishMinting",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [{
      "name": "",
      "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
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
    "constant": false,
    "inputs": [{
      "name": "_spender",
      "type": "address"
    }, {
      "name": "_addedValue",
      "type": "uint256"
    }],
    "name": "increaseApproval",
    "outputs": [{
      "name": "success",
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
    }, {
      "name": "_spender",
      "type": "address"
    }],
    "name": "allowance",
    "outputs": [{
      "name": "remaining",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "newOwner",
      "type": "address"
    }],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "burner",
      "type": "address"
    }, {
      "indexed": true,
      "name": "value",
      "type": "uint256"
    }],
    "name": "Burn",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "to",
      "type": "address"
    }, {
      "indexed": false,
      "name": "amount",
      "type": "uint256"
    }],
    "name": "Mint",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [],
    "name": "MintFinished",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "previousOwner",
      "type": "address"
    }, {
      "indexed": true,
      "name": "newOwner",
      "type": "address"
    }],
    "name": "OwnershipTransferred",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "owner",
      "type": "address"
    }, {
      "indexed": true,
      "name": "spender",
      "type": "address"
    }, {
      "indexed": false,
      "name": "value",
      "type": "uint256"
    }],
    "name": "Approval",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "from",
      "type": "address"
    }, {
      "indexed": true,
      "name": "to",
      "type": "address"
    }, {
      "indexed": false,
      "name": "value",
      "type": "uint256"
    }],
    "name": "Transfer",
    "type": "event"
  }]
]
export const eth_getCont_address = "0xa6c624595c5ac7fc6bb418d57810f3b864030973"
export const eth_sendCont_address = "0xa6c624595c5ac7fc6bb418d57810f3b864030973"

export function eth_getCont_hexAddress(_address) {
  var address = _address.slice(2);
  const eth_getCoinBalance = "0x70a08231000000000000000000000000" + address;
  return eth_getCoinBalance;
}


export function eth_sendCont_hexAddress(from, to, amount) {
  var from = from.slice(2);
  var to = to.slice(2);
  var length = amount.length;
  var eth_sendCoinBalace = "0x23b872dd000000000000000000000000" + from + "000000000000000000000000" + to + "0000000000000000000000000000000000000000000000000000000000000000";
  eth_sendCoinBalace = eth_sendCoinBalace.slice(0, -length);
  eth_sendCoinBalace = eth_sendCoinBalace + amount.toString(16);
}
