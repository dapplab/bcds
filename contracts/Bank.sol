import "Draft";
import "Entity";

contract Bank is Entity{
  bytes32 public name;
  address[] drafts;
  address[] public receivedDrafts;

  event CreatedBank(bytes32 indexed topic, bytes32 name);
  event CreatedDraft(bytes32 indexed topic, address draft);

  function Bank(bytes32 _name){
    owner = tx.origin;
    name = _name;
    CreatedBank('BANK', _name);
  }

  function setName(bytes32 _name) onlyowner {
    name = _name;
  }

  function createDraft(address _payer, address _payee, uint32 _amount, uint32 _rate, uint32 _mature) onlyowner returns (address) {
    address latest = new Draft(address(this), _payer, _payee, _amount, _rate, _mature);
    drafts.push(latest);
    CreatedDraft('Draft', latest);
    return latest;
  }

  //TODO: should check drafts last entity, only add draft to self when
  //draft transfed to me
  function addDraft(address _draft) {
    drafts.push(_draft);
  }

  function getDrafts() constant returns (address[]) {
    return drafts;
  }

  function addReceivedDrafts(address _draft) external {
    receivedDrafts.push(_draft);
  }

  function getReceivedDrafts() constant returns (address[]){
    return receivedDrafts;
  }

}
