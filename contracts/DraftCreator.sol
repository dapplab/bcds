import "Draft";
library DraftCreator {
  function create(address[] storage self, address _bank, address _payer, address _payee, uint _amount, uint _rate, uint _mature) returns (address) {
    address latest = new Draft(_bank, _payer, _payee, _amount, _rate, _mature);
    self.push(latest);
    return latest;
  }
}
