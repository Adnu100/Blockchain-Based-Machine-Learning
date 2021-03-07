const Web3 = require("web3");

const abi = require("./abi.json");
const bytecode = require("./bytecode.json");

const web3 = new Web3("http://localhost:7545/");

async function main() {
  let contract = new web3.eth.Contract(abi);
  let accounts = await web3.eth.getAccounts();
  contract
    .deploy({
      data: "0x" + bytecode.object,
      arguments: ["test"],
    })
    .send({
      from: accounts[7],
      gas: 1000000,
      gasPrice: 100000,
    })
    .then(console.log)
    .catch(console.log);
  console.log("contract created and deployed successfully");
}

main();
