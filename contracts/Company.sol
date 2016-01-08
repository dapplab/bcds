import 'Entity';

contract Company is Entity{
  function Company(bytes32 _name){
    name = _name;
  }
}
