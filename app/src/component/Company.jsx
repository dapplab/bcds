import React from 'react';
import FormatUtil from '../common/utils' ;

export default class Company extends React.Component {
  static drafts = [
    { bankName:"bank of china" , payerName:"ancun"   , payeeName:"fugle" , amount:2000000, rate:34, mature:1452273587} ,
    { bankName:"bank of china" , payerName:"ancun1"  , payeeName:"fugle1" , amount:12000000, rate:24, mature:1452273587} ,
    { bankName:"bank of china" , payerName:"ancun2"  , payeeName:"fugle2" , amount:16000000, rate:14, mature:1452273587}
  ] ;

  render() {
    let drafts = Company.drafts.map( (x) => {
      return ( <div><div>
        {x.bankName}
      </div>
        <div>{x.payerName}</div>
        <div>{x.payeeName}</div>
        <div>{FormatUtil.formatMoney(x.amount)}</div>
        <div>{FormatUtil.formatPercentage(x.rate)}</div>
        <div>{FormatUtil.formatDate(x.mature)}</div>
      </div> ) ;
    }) ;
    return <div>{drafts}</div> ;
  }
}
