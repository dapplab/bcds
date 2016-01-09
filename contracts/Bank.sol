import 'Entity';
import 'Draft';

contract Bank is Entity{
  function Bank(bytes32 _name){
    name = _name;
  }

  function createDraft(address _payer, address _payee, uint _amount, uint _rate, uint _mature) onlyowner returns (address) {
    address latest = new Draft(msg.sender, _payer, _payee, _amount, _rate, _mature);
    drafts.push(latest);
    //Draft(latest).transfer(address(this), _payer, 'Company');
    return latest;
  }
}
