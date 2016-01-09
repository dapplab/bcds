import { StringUtil } from "../common/utils" ;

export default class CompanyStore {
  static createCompanies() {
    var info= function(){
      toastr.info("sucessful save") ;
    }

    var err= function(e) {
      toastr.error(e);
    }

    var hub = EntityHub.deployed() ;

    hub.createBank( "Company 1" , web3.eth.accounts[3] , {from:web3.eth.accounts[0]}).then(info,err);
    hub.createBank( "Company 2" , web3.eth.accounts[4] , {from:web3.eth.accounts[0]}).then(info,err);
  }

  static companies = [];

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
