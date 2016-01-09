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
    {bankName: "中国银行", account: "1a"},
    {bankName: "中国工商银行", account: "1b"},
    {bankName: "中国建设银行", account: "1c"},
    {bankName: "中国交通银行", account: "1d"} ] ;


}

