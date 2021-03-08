const Web3 = require("web3");

const abi = require("./abi.json");

async function interactTest(address) {
  let web3 = new Web3("http://localhost:7545/");
  let contract = web3.eth.Contract(abi, address);
  let name = await contract.methods.name().call();
  console.log(name);
}

interactTest("0x5a9cBEC87B4fdf9d52a2B4ACaFAff8efaD047F7A");
