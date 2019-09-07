//artifacts represents the contract abstraction that is specific to truffle
//this will give us a election artifact that  represents our smart contract.
//Truffle will expose this so we can use it ...anywhere
var Election = artifacts.require("./Election.sol");

module.exports = function(deployer) {
  deployer.deploy(Election);
};

