contract Company {
  bytes32 public name;

  function setName(bytes32 _name) {
    name = _name;
  }
}
