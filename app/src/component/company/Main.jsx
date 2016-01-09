import React from 'react';
import {Link} from 'react-router';

class Main extends React.Component {

  render() {
    return (
      <div className="main-wrapper">
        <div className="aside-container">
          <ul>
            <li><Link to="/draft/new" activeClassName="active">Create Draft</Link></li>
            <li><Link to="/company/drafts" activeClassName="active">Sent Drafts</Link></li>
            <li><Link to="/company/received" activeClassName="active">Received Drafts</Link></li>
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
