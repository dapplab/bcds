
contract Entity {
  bytes32 public name;
  address public owner;
  address[] drafts;

  function addDraft(address _address) returns (bool){
    drafts.push(_address);
  }

  function removeDraft(address _address) returns (bool){
    for(uint i = 0; i < drafts.length; i++){
      if(drafts[i] == _address){
        delete drafts[i];
        return true;
      }
    }
    return false;
  }

  modifier onlyowner() {
    if (msg.sender != owner)
      throw;
    _
  }
}
