pragma solidity ^0.5.0;

contract Election {
  //Store Candidate
  //Read Candidate
  string public candidate;
  //going to get assigned a 'getter function' by Solidity.
  //candidate is now a function with a getter.  so app.candidate() yields Candidate 1
  //Constructor
  function ElectionFunc () public {
    //state variable
    candidate = "Candidate 1";
  }
}
