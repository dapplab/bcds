import BankStore from "./BankStore" ;
import CompanyStore from "./CompanyStore" ;
import { FormatUtil } from '../common/utils';

export default class DraftStore {
  static queryDraft(address) {
    return new Promise((reslove,reject)=>{
      BankStore.getBanks().then( (x)=>{
        CompanyStore.getCompanies().then((y) =>{
          Draft.at(address).getInfo.call().then(
            (x) => {
              reslove( {bankName:x[0], companyName:x[1], amount:x[2].toNumber() , rate:x[3].toNumber(), mature:FormatUtil.formatDate(x[4].toNumber())} );
            }
          );

        });
      })
    })
  }
}
