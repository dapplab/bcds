import React from 'react';
import FormatUtil from '../common/utils' ;
import Draft from '../stores/Draft' ;

export default class Company extends React.Component {

  render() {
    let drafts = Draft.drafts.map( (x) => {
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
