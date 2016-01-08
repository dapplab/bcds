contract Draft {
  address public bank;
  uint    public amount;
  uint    public rate;
  uint    public mature;

  address[] public entities;
  mapping (address => bytes32) entitiesType;

  address public holder;
  bytes32 public holderType;

  function Draft(address _bank, address _payer, address _payee, uint _amount, uint _rate, uint _mature) {
    bank = _bank;
    (amount, rate, mature) = (_amount, _rate, _mature);

    entities.push(_payer);
    entities.push(_payee);

    holder = _payer;
    holderType = 'Company';
  }

  function transfer(address _to, bytes32 _toType) onlyHolder returns (bool) {
    if(entities[entities.length - 1] != _to) throw;

    holder = _to;
    holderType = _toType;
    return true;
  }

  //using _toType to fit different user case, _toType can be Company, Bank, Exchange
  function beforeTransfer(address _to, bytes32 _toType) onlyHolder returns (bool) {
    entities.push(_to);
    entitiesType[_to] = _toType;
    return true;
  }

  modifier onlyHolder {
    if(msg.sender != holder) throw;
    _
  }
}
