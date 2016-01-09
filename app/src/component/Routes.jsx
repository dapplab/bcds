import React from 'react';
import { Router, Route, Link ,browserHistory, IndexRoute } from 'react-router';
import App from './App';
import Home from './Home';
import Bank from './Bank';
import Company from './Company';
import Draft from './Draft';
import CreateDraft from './CreateDraft';
import Setup from './Setup';
import Exchange from './Exchange';

export default class Routes extends React.Component {
  render() {
    return (<Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="bank" component={Bank.Main}>
          <IndexRoute component={Bank.Issued}/>
          <Route  path="/bank/issued" component={Bank.Issued}/>
          <Route  path="/bank/received" component={Bank.Received}/>  
        </Route>
        <Route  path="company" component={Company.Main}>
          <IndexRoute component={Company.Drafts}/>
          <Route  path="/company/drafts" component={Company.Drafts}/>  
          <Route  path="/company/received" component={Company.Received}/> 
        </Route>
        <Route  path="draft/new" component={CreateDraft}/>
        <Route  path="draft/:id" component={Draft}/>
        <Route  path="/setup" component={Setup} />
        <Route  path="/exchange" component={Exchange} />
      </Route>
    </Router>) ;
  }
}