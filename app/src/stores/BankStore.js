import {StringUtil} from "../common/utils" ;
import { message } from 'antd';

export default class BankStore {
  constructor(props) {
  }

  static createBanks() {
    var info= function(){
      message.info("sucessful save") ;
    }

    var err= function(e) {
      message.error(e);
    }

    var hub = EntityHub.deployed();
    hub.createBank("BOC", web3.eth.accounts[0], {from: web3.eth.accounts[0], gas: 12345678}).then(info,err);
    hub.createBank("ICBC", web3.eth.accounts[0], {from: web3.eth.accounts[0], gas: 12345678}).then(info,err);
  }

  static currentBank = undefined ;

  static getBank() {
    return new Promise((resolve, reject) => {
      if (!BankStore.currentBank) {
        var hub = EntityHub.deployed();

        hub.findBank.call(web3.eth.accounts[0], {from: web3.eth.coinbase}).then((r)=> {
          BankStore.currentBank = Bank.at(r);
          resolve(BankStore.currentBank);
        })
      } else {
        resolve(BankStore.currentBank);
      }
    });
  }

  static banks = undefined;

  static bankName(address) {
    BankStore.banks.find((x)=>{return x.contract==address}).name ;
  }

  static getBanks() {
    return new Promise((resolve, reject) => {
        if (!BankStore.banks) {
          var hub = EntityHub.deployed();

          hub.listBanks.call().then(function (r) {
            var banks = [];

            if (r && r[0]) {
              for (var i = 0; i < r[0].length; i++) {
                banks.push({name: StringUtil.decodeBytes(r[1][i]) , account: r[0][i], contract: r[2][i]});
              }
            }

            BankStore.banks = banks;
            resolve(BankStore.banks);
          });
        } else {
          resolve(BankStore.banks);
        }
      }
    );
  }
}

