pragma solidity ^0.6.0;

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
    
    struct DataHolderSet {
        address[] dataHolders;
        mapping(address => bool) existance;
    }
    
    string public name;
    DataHolderSet registered;
    
    mapping(address => uint) gradients;
    
    constructor(string memory _name) public {
        super;
        name = _name;
    }
    
    modifier shouldBeRegistered() {
        require(registered.existance[msg.sender], "is not registered");
        _;
    }
    
    function addDataHolder(address _dataHolder) public shouldBeOwned {
        registered.dataHolders.push(_dataHolder);
        registered.existance[_dataHolder] = true;
    }
    
    function addGradient(uint _gradient) public shouldBeRegistered {
        gradients[msg.sender] = _gradient;
    }
    
    function getGradient(uint index) public returns(uint) {
        return gradients[registered.dataHolders[index]];
    }
}
