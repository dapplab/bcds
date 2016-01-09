
contract Entity {
  bytes32 public name;
  address public owner;
  address[] drafts;

  function addDraft(address _address) returns (bool){
    drafts.push(_address);
  }

  function getDrafts() constant returns (address[]){
    return drafts;
  }

  modifier onlyowner() {
    if (msg.sender != owner)
      throw;
    _
  }
}
