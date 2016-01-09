import "Entity";
import "Bank";
import "Company";

contract EntityHub {
  address owner; 

  mapping(address => address) banks; 
  mapping(address => address) companies; 

  function EntityHub() {
    owner = msg.sender; 
  }

  modifier onlyOwner {
    if( msg.sender == owner ) _ 
  }

  function findBank(address _account) returns (address) {
    return banks[_account]; 
  }

  function findCompany(address _account) returns (address) {
    return companies[_account]; 
  }

  function createBank(bytes32 _name, address _account) onlyOwner {
     banks[_account] = new Bank(_name); 
  }

  function createCompany(bytes32 _name , address _account) onlyOwner {
     companies[_account] = new Company(_name) ; 
  }
}
