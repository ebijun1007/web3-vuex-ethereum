export const abi = [{
    "constant": false,
    "inputs": [{
        "name": "_address",
        "type": "address"
      },
      {
        "name": "_min",
        "type": "bool"
      },
      {
        "name": "_calories",
        "type": "bool"
      },
      {
        "name": "_distances",
        "type": "bool"
      },
      {
        "name": "_floors",
        "type": "bool"
      },
      {
        "name": "_steps",
        "type": "bool"
      }
    ],
    "name": "setFlags",
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
        "name": "_address",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "string"
      }
    ],
    "name": "setToken",
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
    "name": "getFlags",
    "outputs": [{
        "name": "",
        "type": "bool"
      },
      {
        "name": "",
        "type": "bool"
      },
      {
        "name": "",
        "type": "bool"
      },
      {
        "name": "",
        "type": "bool"
      },
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [{
      "name": "_owner",
      "type": "address"
    }],
    "name": "getToken",
    "outputs": [{
      "name": "",
      "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
]

export const address = "0xce3999cb97f6cfe2e90ea08249e88c1282ea727c"

// export function setToken(address, token) {
//   var address = address.slice(2);
//   "0xfdad53db000000000000000000000000" + address + "00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000" 
//   fitbit.setToken.getData("0xf0d0177de88ddfb13a17c05fc70263fcc37e08fc", "a")
//   "0xfdad53db000000000000000000000000" + address + "000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000016100000000000000000000000000000000000000000000000000000000000000"
//   fitbit.setToken.getData("0xf0d0177de88ddfb13a17c05fc70263fcc37e08fc", "b")
//   "0xfdad53db000000000000000000000000f0d0177de88ddfb13a17c05fc70263fcc37e08fc000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000016200000000000000000000000000000000000000000000000000000000000000"
// }

// export function getToken(address) {
//   "0x59770438000000000000000000000000" + "f0d0177de88ddfb13a17c05fc70263fcc37e08fc"
//   var address = address.slice(2);
//   const token = "0x59770438000000000000000000000000" + address;
//   return token;
// }

export function setFlags(address, summaries) {
  var address = address.slice(2);
  var common = "000000000000000000000000000000000000000000000000000000000000000"
  var base = "0x91ba7caf000000000000000000000000"
  var setflags = base + address;
  for (var summary in summaries) {
    if (summaries[summary].isPushed)
      setflags = setflags + common + "1";
    else
      setflags = setflags + common + "0";
  }
  console.log(setflags)
  return setflags
}

export function getFlags(address) {
  "0x817ad5d3000000000000000000000000" + "f0d0177de88ddfb13a17c05fc70263fcc37e08fc"
  var address = address.slice(2);
  const flags = "0x817ad5d3000000000000000000000000" + address;
  console.log(flags)
  return flags;
}
