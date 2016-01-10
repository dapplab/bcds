import { StringUtil } from "../common/utils" ;
import { message } from 'antd';

export default class CompanyStore {
  static createCompanies() {
    var info= function(){
      message.info("sucessful save") ;
    }

    var err= function(e) {
      message.error(e);
    }

    var hub = EntityHub.deployed() ;

    hub.createCompany( "Company 1" , web3.eth.accounts[0] , {from:web3.eth.accounts[0], gas: 12345678}).then(info,err);
    hub.createCompany( "Company 2" , web3.eth.accounts[0] , {from:web3.eth.accounts[0], gas: 12345678}).then(info,err);
  }

  static currentCompany = undefined ;

  static getCompany() {
    return new Promise((resolve,reject) => {
      if( !CompanyStore.currentCompany ) {
        var hub = EntityHub.deployed() ;

        hub.findCompany.call(web3.eth.accounts[0],{from:web3.eth.coinbase}).then( (r)=> {
          CompanyStore.currentCompany = Company.at(r) ;
          resolve(CompanyStore.currentCompany) ;
        })
      } else {
        resolve(CompanyStore.currentCompany) ;
      }
    }) ;
  }

  static companies = undefined ;

  static getCompanies() {
    return new Promise((reslove, reject) => {
        if (!CompanyStore.companies) {
          var hub = EntityHub.deployed();

          hub.listCompanies.call().then(function (r) {
            var companies = [];

            if (r && r[0]) {
              for (var i = 0; i < r[0].length; i++) {
                companies.push({name: StringUtil.decodeBytes(r[1][i]) , account: r[0][i], contract: r[2][i]});
              }
            }

            CompanyStore.companies = companies;
            reslove(CompanyStore.companies);
          });
        } else {
          reslove(CompanyStore.companies);
        }
      }
    );
  }
}
