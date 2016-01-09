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
    hub.createBank("BOC", web3.eth.accounts[0], {from: web3.eth.accounts[0]}).then(info,err);
    hub.createBank("ICBC", web3.eth.accounts[2], {from: web3.eth.accounts[0]}).then(info,err);
  }

  static banks = undefined;

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

