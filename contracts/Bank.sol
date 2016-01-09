import "Draft";

contract Bank{
  bytes32 public name;
  address[] drafts;

  function setName(bytes32 _name) {
    name = _name;
  }

  function createDraft(address _payer, address _payee, uint _amount, uint _rate, uint _mature) returns (address) {
    address latest = new Draft(address(this), _payer, _payee, _amount, _rate, _mature);
    drafts.push(latest);
    return latest;
  }

  function addDraft(address _draft) {
    drafts.push(_draft);
  }
}
