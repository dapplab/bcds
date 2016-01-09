import React from 'react';
import {Button} from 'antd';
import BankStore from '../stores/BankStore' ;
import CompanyStore from '../stores/CompanyStore' ;

export default class Setup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {bankName:"" , companyName:""};
  }

  handleInit = (event) => {
    BankStore.createBanks();
    CompanyStore.createCompanies();
  };

  render() {
    return( <div className="main-container-center">
      <Button size="big" type="primary" onClick={this.handleInit} >初始化数据</Button>
    </div>) ;
  }
}
