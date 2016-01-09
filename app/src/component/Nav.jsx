import React from 'react';
import {Link, IndexLink} from 'react-router';

class Nav extends React.Component {

  render() {
    return (
      <header id="header" className="clearfix">
        <a className="logo" href="/">
          BCDS
        </a>
        <nav className="nav">
          <span className="bar"></span>
          <ul>
            <li>
              <IndexLink to="/" activeClassName="active">Home</IndexLink>
            </li>
            <li>
              <Link to="company" activeClassName="active">Company Client</Link>
            </li>
            <li>
              <Link to="bank" activeClassName="active">Bank Client</Link>
            </li>
            <li>
              <Link to="exchange" activeClassName="active">Exchange</Link>
            </li>
            <li>
              <Link to="/setup" activeClassName="active">Setup</Link>
            </li>
          </ul>
        </nav>
        <div className="nav-phone-icon"></div>
      </header>
    );
  }

}

export default Nav;
