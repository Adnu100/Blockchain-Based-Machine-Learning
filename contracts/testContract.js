const Web3 = require("web3");

const abi = require("./abi.json");

async function interactTest(address) {
  let web3 = new Web3("http://localhost:7545/");
  let contract = web3.eth.Contract(abi, address);
  let name = await contract.methods.name().call();
  console.log(name);
}

interactTest("0xF802D066da8c58a3598A1cb89F206153077Bc94f");
