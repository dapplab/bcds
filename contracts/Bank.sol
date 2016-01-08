import 'Entity';
import "DraftCreator";

contract Bank is Entity{
  string name;
  function Bank(string _name){
    name = _name;
  }

  function createDraft(address _payer, address _payee, uint _amount, uint _rate, uint _mature) returns (address) {
    address latest = drafts.create(address(this), _payer, _payee, _amount, _rate, _mature);
    //Draft(latest).transfer(address(this), _payer, 'Company');
    return latest;
  }
}
