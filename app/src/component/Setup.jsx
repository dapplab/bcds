import React from 'react';

export default class Setup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {bankName:"" , companyName:""};
  }

  handleAddBank = (event) => {

  };

  handleAddCompany = (event) => {

  };

  render() {
    return( <div>
      <input value={this.state.bankName} />
      <button onclick={this.handleAddBank} >新增银行</button>

      <input value={this.state.companyName} />
      <button onclick={this.handleAddCompany} >新增企业</button>
    </div>) ;
  }
}
