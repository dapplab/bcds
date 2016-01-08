import 'Entity';

contract Company is Entity{
  string name;
  function Company(string _name){
    name = _name;
  }
}
