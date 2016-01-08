import 'Entity';

contract Banks is Entity {

  struct Bank {
    address owner;
    bytes32 name;
  }

  mapping (address => Bank) banks;

  function addBank(bytes32 _name) {
    banks[msg.sender] = Bank({ owner: msg.sender, name: _name });
  }

  // uniqName
  // modifier uniqName {
  //   if(banks[msg.sender]){ throw; }
  //   _
  // }
}
