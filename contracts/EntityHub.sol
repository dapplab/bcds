import "Bank";
import "Company";

contract EntityHub {

  address[] bankAccounts; 
  bytes32[] bankNames;
  address[] bankContracts;

  address[] companyAccounts; 
  bytes32[] companyNames;
  address[] companyContracts;

  function EntityHub() {
  }


  function findCompany(address _account) constant returns(address){
    uint size = companyAccounts.length;
    for(uint n=0; n<size; n++) {
      if(_account == companyAccounts[n]) {
        return companyContracts[n];
      }
    }
  }

  function findBank(address _account) constant returns(address) {
    uint size = bankAccounts.length;
    for( uint n=0; n<size; n++) {
      if(_account == bankAccounts[n]) {
        return bankContracts[n];
      }
    }
  }

  function listBanks() constant returns(address[], bytes32[], address[]) {
    return (bankAccounts, bankNames, bankContracts);
  }

  function listCompanies() constant returns(address[], bytes32[], address[]) {
    return (companyAccounts, companyNames, companyContracts);
  }

  function createBank(bytes32 _name, address _account) {
     bankAccounts.push(_account);
     bankNames.push(_name);
     bankContracts.push(new Bank(_name));
  }

  function createCompany(bytes32 _name, address _account) {
     companyAccounts.push(_account);
     companyNames.push(_name);
     companyContracts.push(new Company(_name));
  }
}
