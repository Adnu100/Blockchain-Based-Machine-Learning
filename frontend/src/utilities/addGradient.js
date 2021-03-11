const abi = require("abi.json");

function addGradient(web3, gradients) {
  const { connection, contractAddress, senderAddress } = web3;
  const { slope, intercept, loopNumber } = gradients;
  let contract = new connection.eth.Contract(abi, contractAddress);
  contract.methods
    .addGradient(slope, intercept)
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
export default addGradient;
