import React from 'react';
import {Link} from 'react-router';
import {FormatUtil} from '../../common/utils' ;
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
      <div className="main-wrapper bank-client">
        <div className="aside-container">
          <ul>
            <li><Link to="/draft/new" activeClassName="active">Create Draft</Link></li>
            <li><Link to="/bank/issued" activeClassName="active">Issued Drafts</Link></li>
            <li><Link to="/bank/received" activeClassName="active">Received Drafts</Link></li>
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