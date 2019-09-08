//truffle comes bundeled w/mocha
//require smart contract- creates an artifact that truffle will use to create an abstraction
//to interact with our contract
var Election = artifacts.require("./Election.sol");
var electionInstance;
//declare our contract. it will inject all of the accounts in our development environment
contract("Election", function (accounts) {
  it("initializes with two candidates", function () {
    //fetch
    return Election.deployed().then(function (instance) {
      return instance.candidatesCount();
    }).then(function (count) {
      assert.equal(count, 2);
    });
  });
//we must use a promise chain with a callback function
  it("it initializes the candidates with the correct values", function() {
    //copy of our deployed contract
    return Election.deployed().then(function(instance) {
      electionInstance = instance;
      return electionInstance.candidates(1);
    }).then(function(candidate) {
      assert.equal(candidate[0], 1, "contains the correct id");
      assert.equal(candidate[1], "Candidate 1", "contains the correct name");
      assert.equal(candidate[2], 0, "contains the correct votes count");
      return electionInstance.candidates(2);
    }).then(function(candidate) {
      assert.equal(candidate[0], 2, "contains the correct id");
      assert.equal(candidate[1], "Candidate 2", "contains the correct name");
      assert.equal(candidate[2], 0, "contains the correct votes count");
    });
  });
});

