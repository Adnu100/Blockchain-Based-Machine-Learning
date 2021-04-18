pragma solidity ^0.4.21;

/* Ownable contract which provides a base class for all classes
 * to which modification is to be prohibited by any other 
 * who is not the owner of the class
 */
contract Ownable {
    address owner;
    
    function Ownable() public {
        owner = msg.sender;
    }
    
    modifier shouldBeOwned() {
        require(owner == msg.sender);
        _;
    }
    
    function changeOwner(address _newOwner) public shouldBeOwned {
        owner = _newOwner;
    }
    
    function getOwner() external view returns(address) {
        return owner;
    }
}

/* Model contract provides basic functionalities to interact with 
 * the model which is stored on the Blockchain and update it
 */
contract Model is Ownable {
    struct ModelState {
        string slope;
        string intercept;
    }

    struct DataHolderSet {
        address[] dataHolders;
        mapping(address => bool) existance;
    }
    
    string public name;
    DataHolderSet registered;
    ModelState current;
    
    function Model() public {
        super;
        /*name = _name;*/
        name = "test";
        current.slope = "0";
        current.intercept = "0";
    }
    
    modifier shouldBeRegistered() {
        require(registered.existance[msg.sender]);
        _;
    }
    
    function addDataHolder(address _dataHolder) public shouldBeOwned {
        registered.dataHolders.push(_dataHolder);
        registered.existance[_dataHolder] = true;
    }
    
    function updateModel(string m, string b) public shouldBeRegistered {
        current.slope = m;
        current.intercept = b;
    }
    
    function getCurrentModel() public view returns(string, string) {
        return (current.slope, current.intercept);
    }
}
