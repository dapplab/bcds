import "Entity";
import "Draft";

contract Company is Entity{
  bytes32 public name;
  address[] public drafts;
  address[] public receivedDrafts;

  function Company(bytes32 _name) {
    owner = tx.origin;
    name = _name;
  }

  function setName(bytes32 _name) onlyowner {
    name = _name;
  }

  //TODO: should check drafts last entity, only add draft to self when
  //draft transfed to me
  function addDraft(address _draft) external {
    drafts.push(_draft);
  }

  function beforeTransfer(address _draft, address _to, bytes32 _toType) onlyowner external{
      Draft(_draft).beforeTransfer(_to, _toType);
  }

  function transfer(address _draft, address _to, bytes32 _toType) onlyowner external{
      Draft(_draft).transfer(_to, _toType);
  }

  function getDrafts() constant returns (address[]){
    return drafts;
  }

  function addReceivedDrafts(address _draft) external {
    receivedDrafts.push(_draft);
  }

  function getReceivedDrafts() constant returns (address[]){
    return receivedDrafts;
  }
}
