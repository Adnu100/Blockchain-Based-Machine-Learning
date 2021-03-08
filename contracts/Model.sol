pragma solidity ^0.4.21;

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

contract Model is Ownable {
    struct ModelState {
        int slope;
        int intercept;
    }

    struct Gradients {
        int m;
        int b;
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
        current.slope = 0;
        current.intercept = 0;
    }
    
    modifier shouldBeRegistered() {
        require(registered.existance[msg.sender]);
        _;
    }
    
    function addDataHolder(address _dataHolder) public shouldBeOwned {
        registered.dataHolders.push(_dataHolder);
        registered.existance[_dataHolder] = true;
    }
    
    function addGradient(int m, int b) public shouldBeRegistered {
        current.slope += m;
        current.intercept += b;
    }
    
    function getCurrentModel() public view returns(int, int) {
        return (current.slope, current.intercept);
    }
}
