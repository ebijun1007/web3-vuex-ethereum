pragma solidity ^0.4.16;

contract FitbitTokens{

  mapping(address => string) token;

  function getToken(address _owner) public constant returns (string) {
    return token[_owner];
  }
  
  function setToken(address _address, string _value) public returns (bool) {
    token[_address] = _value;
    return true;
  }
  
  struct PushFlag {
      bool min;
      bool calories;
      bool distances;
      bool floors;
      bool steps;
  }
  
  mapping(address => PushFlag) PushFlags;
  
  function getFlags(address _owner) public constant returns (bool,bool,bool,bool,bool) {
    return (PushFlags[_owner].min, PushFlags[_owner].calories, PushFlags[_owner].distances, PushFlags[_owner].floors, PushFlags[_owner].steps);
  }
  
  function setFlags(address _address, bool _min, bool _calories, bool _distances, bool _floors, bool _steps) public returns (bool) {
    PushFlags[_address].min = _min;
    PushFlags[_address].calories = _calories;
    PushFlags[_address].distances = _distances;
    PushFlags[_address].floors = _floors;
    PushFlags[_address].steps = _steps;
    return true;
  }
  

}


