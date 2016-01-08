import "Draft";
library DraftCreator {
  function create(address[] storage self, address bank, address company,
                  uint amount, uint rate) returns (address) {
    address latest = new Draft(bank, company, amount, rate);
    self.push(latest);
    return latest;
  }
}
