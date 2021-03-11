const abi = require("./abi.json");
const bytecode = require("./bytecode.json");

function createContract(connection, address) {
  let contract = new connection.eth.Contract(abi);
  contract
    .deploy({
      data: "0x" + bytecode.object,
    })
    .send({
      from: address,
      gas: 1000000,
      gasPrice: 100000,
    })
    .then(() => {
      alert("empty model created and added to blockchain successfully");
    })
    .catch((error) => {
      console.log(error);
      alert("some error occured, please try again");
    });
}

export default createContract;
