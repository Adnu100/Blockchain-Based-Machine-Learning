import { Web3 } from "web3";

const abi = require("./abi.json");
const bytecode = require("./bytecode.json");

const web3 = new Web3("http://localhost:7545/");

async function main() {
  console.log("started function");
  let contract = new web3.eth.Contract(abi);
  let accounts = await web3.eth.getAccounts();
  let info = await contract
    .deploy({
      data: "0x" + bytecode.object,
    })
    .send({
      from: accounts[0],
      gas: 1000000,
      gasPrice: 100000,
    });
  console.log("here");
  console.log(info);
}

main();
