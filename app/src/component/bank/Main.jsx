import React from 'react';
import FormatUtil from '../../common/utils' ;
import DraftStore from '../../stores/DraftStore' ;

class Main extends React.Component {

  render() {
    let drafts = DraftStore.drafts.map( (x) => {
      return ( <div>
        <div>{x.bankName}</div>
        <div>{x.payerName}</div>
        <div>{x.payeeName}</div>
        <div>{FormatUtil.formatMoney(x.amount)}</div>
        <div>{FormatUtil.formatPercentage(x.rate)}</div>
        <div>{FormatUtil.formatDate(x.mature)}</div>
      </div> ) ;
    }) ;

    return (
      <div className="main-wrapper">
        <div className="aside-container">
          <ul>
            <li><a href="/#/draft/new" className="">Create Draft</a></li>
            <li className="current"><a href="/#/bank/issued">Sent Drafts</a></li>
            <li><a href="/#/bank/received">Received Drafts</a></li>
          </ul>
        </div>
        <div className="main-container">
          {drafts}
          {this.props.children}
        </div>
      </div>
    );
  }

}

export default Main;