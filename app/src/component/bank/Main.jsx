import React from 'react';

class Main extends React.Component {

  render() {
    return (
      <div className="main-wrapper">
        <div className="aside-container">
          <ul>
            <li><a href="/#/draft/new" className="">Create Draft</a></li>
            <li className="current"><a href="/#/bank/issued">Issued Drafts</a></li>
            <li><a href="/#/bank/received">Received Drafts</a></li>
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
