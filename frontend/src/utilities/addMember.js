const abi = require("./abi.json");

export function addMember(web3, address) {
  const { connection, contractAddress, senderAddress } = web3;
  let contract = new connection.eth.Contract(abi, contractAddress);
  contract.methods
    .addDataHolder(address)
    .send({
      from: senderAddress,
    })
    .then(() => {
      alert("added member successfully");
      console.log("member added");
    })
    .catch((error) => {
      console.log(error);
      alert("failed adding member");
      console.log("member not added");
    });
}
