import "Draft";

contract Bank{
  bytes32 public name;
  address[] drafts;

  event CreatedBank(bytes32 indexed topic, bytes32 name);
  event CreatedDraft(bytes32 indexed topic, address draft);

  function Bank(bytes32 _name){
    name = _name;
    CreatedBank('BANK', _name);
  }

  function setName(bytes32 _name) {
    name = _name;
    CreatedBank('BANK', _name);
  }

  function createDraft(address _payer, address _payee, uint32 _amount, uint32 _rate, uint32 _mature) returns (address) {
    address latest = new Draft(address(this), _payer, _payee, _amount, _rate, _mature);
    drafts.push(latest);
    CreatedDraft('Draft', latest);
    return latest;
  }

  function addDraft(address _draft) {
    drafts.push(_draft);
  }

  function getDrafts() constant returns (address[]){
    return drafts;
  }
}
