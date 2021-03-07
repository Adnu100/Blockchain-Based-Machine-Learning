pragma solidity ^0.7.4;

contract Ownable {
    address owner;
    
    constructor() public {
        owner = msg.sender;
    }
    
    modifier shouldBeOwned() {
        require(owner == msg.sender, "must be owner");
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
    
    constructor(string memory _name) public {
        super;
        name = _name;
        current.slope = 0;
        current.intercept = 0;
    }
    
    modifier shouldBeRegistered() {
        require(registered.existance[msg.sender], "is not registered");
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
