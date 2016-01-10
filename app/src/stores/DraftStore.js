import BankStore from "./BankStore" ;
import CompanyStore from "CompanyStore" ;

export default class DraftStore {
  static queryDraft(address) {
    return new Promise((reslove,reject)=>{
      BankStore.getBanks().then( (x)=>{
        CompanyStore.getCompanies().then((y) =>{
          Draft.at(address).getInfo.call().then(
            (x) => {
              reslove( {bankName:BankStore.bankName(x[0]), companyName:CompanyStore.companyName(x[1]), amount:x[2] , rate:x[3], mature:x[4]} );
            }
          );

        });
      })
    })
  }
}
