import "Bank";
import "Company";

contract EntityHub {
  address public owner;

  address[] public banks;
  address[] public companies;

  event NewBank(address bank);
  event NewCompany(address company);

  function EntityHub() {
    owner = msg.sender;
  }

  modifier onlyOwner {
    if( msg.sender == owner ) _
  }

  function ping() {
  }

  function getBanks() returns (address[]) {
    return banks;
  }

  function getCompanies() returns (address[]) {
    return companies;
  }

  function createBank(bytes32 _name) onlyOwner {
    address bank = new Bank(_name);
    NewBank(bank);
    banks.push(bank);
  }

  function createCompany(bytes32 _name) onlyOwner {
    address company = new Company(_name);
    NewCompany(company);
    companies.push(company);
  }
}
