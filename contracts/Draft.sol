contract Draft {
  address public bank;
  uint32    public amount;
  uint32    public rate;
  uint32    public mature;

  address[] public entities;
  mapping (address => bytes32) entitiesType;

  address public holder;
  bytes32 public holderType;

  event TX(address indexed from, address indexed to, bytes32 indexed funName);

  function Draft(address _bank, address _payer, address _payee, uint32 _amount, uint32 _rate, uint32 _mature) {
    bank = _bank;
    (amount, rate, mature) = (_amount, _rate, _mature);

    entities.push(_payer);
    entities.push(_payee);
    _payer.call(bytes4(sha3("addDraft(address)")), address(this));

    holder = _payer;
    holderType = 'Company';
  }

  function transfer(address _to, bytes32 _toType) onlyHolder returns (bool) {
    if(entitiesType[entities[entities.length - 1]] == 'Bank' ) throw;
    if(entities[entities.length - 1] != _to) throw;

    _to.call(bytes4(sha3("addDraft(address)")), address(this));

    TX(holder, _to, 'transfer');
    holder = _to;
    holderType = _toType;
    return true;
  }

  //using _toType to fit different user case, _toType can be Company, Bank, Exchange
  function beforeTransfer(address _to, bytes32 _toType) onlyHolder returns (bool) {
    // TX(entities[entities.length-1], _to, 'beforeTransfer');

    entities.push(_to);
    entitiesType[_to] = _toType;
    return true;
  }

  modifier onlyHolder {
    if(msg.sender != holder) throw;
    _
  }
}
