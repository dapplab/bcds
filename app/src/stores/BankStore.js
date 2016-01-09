export default class BankStore {
  constructor(props) {
    this.bankContract = setupBankContract;
  }

  setupBankContract() {
    var BankWeb3 = web3.eth.contract(Bank.abi);
    var bankContract = BankWeb3.at(Bank.address);
    console.log('bankContract init..');
    return bankContract;
  }

  static banks = [
    {key: 1, bankName: "中国银行", addr: "1a"},
    {key: 2, bankName: "中国工商银行", addr: "1b"},
    {key: 3, bankName: "中国建设银行", addr: "1c"},
    {key: 4, bankName: "中国交通银行", addr: "1d"} ] ;
}

