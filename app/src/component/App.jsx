import React from 'react';
import { Router, Route, Link , NoMatch} from 'react-router';
import Home from './Home' ;
import Bank from './Bank' ;

export default class App extends React.Component {
  render() {
    return <Router>
      <Route path="/" component={Home}>
        <Route path="bank" component={Bank}/>
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router> ;
  }
}

