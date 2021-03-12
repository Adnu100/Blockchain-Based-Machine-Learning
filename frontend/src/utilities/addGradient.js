const abi = require("./abi.json");

export function addGradient(web3, gradient) {
  const { connection, contractAddress, senderAddress } = web3;
  const { slope, intercept, loopNumber } = gradient;
  let contract = new connection.eth.Contract(abi, contractAddress);
  contract.methods
    .addGradient(slope.toString(), intercept.toString())
    .send({
      from: senderAddress,
    })
    .then(() => {
      console.log(`gradient added [loop: ${loopNumber}]`);
    })
    .catch((error) => {
      console.log(error);
      alert("error occured during training");
    });
}
