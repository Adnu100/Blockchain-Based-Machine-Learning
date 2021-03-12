const Web3 = require("web3");

const abi = require("./abi.json");
const bytecode = require("./bytecode.json");

const web3 = new Web3("http://localhost:7545/");

function main() {
  console.log("started function");
  let contract = new web3.eth.Contract(abi);
  web3.eth.getAccounts().then((accounts) => {
    console.log(accounts);
    contract
      .deploy({
        data: "0x" + bytecode.object,
      })
      .send({
        from: accounts[0],
        gas: 1000000,
        gasPrice: 100000,
      })
      .then(console.log);
  });
}

module.exports = main;
