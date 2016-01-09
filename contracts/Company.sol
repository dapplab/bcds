contract Company {
  bytes32 public name;
  address[] drafts;

  function setName(bytes32 _name) {
    name = _name;
  }

  function addDraft(address _draft) {
    drafts.push(_draft);
  }
}
