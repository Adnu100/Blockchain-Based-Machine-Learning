const abi = require("./abi.json");

export function getCurrentModel(web3) {
  let contract = new web3.connection.eth.Contract(abi, web3.contractAddress);
  return contract.methods.getCurrentModel().call();
}
