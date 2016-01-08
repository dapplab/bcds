import 'Entity';

contract Companies is Entity {
  struct Company {
    address owner;
    bytes32 name;
  }
}
