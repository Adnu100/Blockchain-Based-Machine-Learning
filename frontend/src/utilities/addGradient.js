const abi = require("./abi.json");

export function addGradient(web3, gradient) {
  const { connection, contractAddress, senderAddress } = web3;
  const { slope, intercept, loopNumber } = gradient;
  let contract = new connection.eth.Contract(abi, contractAddress);
  console.log(`adding gradients: slope = ${slope}, intercept = ${intercept}`);
  contract.methods
    .updateModel(slope, intercept)
    .send({
      from: senderAddress,
      gas: 1000000,
      gasPrice: 100000,
    })
    .then(() => {
      console.log(`gradient added [loop: ${loopNumber}]`);
    })
    .catch((error) => {
      console.log(error);
      alert("error occured during training");
    });
}
