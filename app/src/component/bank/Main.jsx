import React from 'react';
import {Link} from 'react-router';
import {FormatUtil} from '../../common/utils' ;
import DraftStore from '../../stores/DraftStore' ;

class Main extends React.Component {

  render() {

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
          {this.props.children}
        </div>
      </div>
    );
  }

}

export default Main;
