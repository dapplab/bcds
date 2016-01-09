
contract Entity {
  bytes32 public name;
  address public owner;
  address[] drafts;

  modifier onlyowner() {
    if (msg.sender != owner)
      throw;
    _
  }
}
