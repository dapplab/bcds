import React from 'react';
import { Router, Route, Link ,browserHistory } from 'react-router';
import Home from './Home';
import Bank from './Bank';
import Company from './Company';

export default class Routes extends React.Component {
  render() {
    return (<Router history={browserHistory}>
      <Route path="/">
        <Route path="home" component={Home} />
        <Route  path="bank" component={Bank}/>
        <Route  path="company" component={Company}/>
      </Route>
    </Router>) ;
  }
}
