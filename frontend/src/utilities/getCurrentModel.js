const abi = require("./abi.json");

export function getCurrentModel(web3) {
  const { connection, contractAddress } = web3;
  let contract = new connection.eth.Contract(abi, contractAddress);
  return contract.methods.getCurrentModel().call();
}
