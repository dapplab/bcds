import React from 'react';
import {Link} from 'react-router';

class Footer extends React.Component {

  render() {
    return (
      <footer id="footer">
        <ul>
          <li>
            <h2>GitHub</h2>
            <a target="_blank " href="https://github.com/bcds-hackathon/bcds">BCDS</a>
            <a target="_blank" href="https://github.com/HydraChain/hydrachain">Hydrachain</a>
          </li>
          <li>
            <h2>About</h2>
            <a href="https://github.com/dapplab">DappLab Team</a>
          </li>
          <li>
            <h2>Contact</h2>
            <a target="_blank" href="mailto: v@baoquan.com">Feedback</a>
            <a target="_blank" href="https://github.com/bcds-hackathon/bcds/issues">Report Bug</a>
          </li>
          <li>
            <h3>Build with ❤ at 2016 Shanghai Blockchain Hackathon</h3>
            <h3>ver：<span id="versions-select">0.1.0</span></h3>
          </li>
        </ul>
      </footer>
    );
  }

}

export default Footer;
