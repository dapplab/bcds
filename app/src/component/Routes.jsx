import React from 'react';
import { Router, Route, Link ,browserHistory, IndexRoute } from 'react-router';
import Home from './Home';
import Bank from './Bank';
import Company from './Company';
import CreateDraft from './CreateDraft';
import Setup from './Setup' ;

export default class Routes extends React.Component {
  render() {
    return (<Router history={browserHistory}>
      <Route path="/">
        <IndexRoute component={Home} />
        <Route  path="bank" component={Bank}/>
        <Route  path="company" component={Company}/>
        <Route  path="draft/new" component={CreateDraft}/>
        <Route  path="setup" component={Setup} />
      </Route>
    </Router>) ;
  }
}
