import "Entity";
import "Draft";

contract Company is Entity{
  bytes32 public name;
  address[] drafts;

  function Company(bytes32 _name) {
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
}
