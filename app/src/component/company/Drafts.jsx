import React from 'react';
import { Table, Tag } from 'antd';
import CompanyStore from '../../stores/CompanyStore';
import DraftStore from '../../stores/DraftStore';

function renderAction() {
  return (
    <div>
      <a href="/#/draft/1">查看详情</a> &nbsp;&nbsp;
      <a href="#">归档</a>
    </div>
  );
}

function renderStatus() {
  return (
    <Tag color="green">已承兑</Tag>
  );
}

function expandedRowRender(record) {
  return <p>testest</p>;
}

const columns = [
  {title: 'Issue Bank', dataIndex: 'bankName' },
  {title: 'Company',dataIndex:'companyName' } ,
  {title: 'Amount', dataIndex:'amount'} ,
  {title: 'Rate' , dataIndex:'rate'} ,
  {title: 'Mature', dataIndex: 'mature'}
];


export default class CompanyDrafts extends React.Component {
  constructor() {
    super();
    this.state = {
      drafts: []
    }
  }

  setDraftList(drafts) {
    var result = drafts.map((item, index) => {
      return { key: index + 1, bankName: item.bankName, companyName: item.companyName, amount:item.amount,rate:item.rate,mature:item.mature}
    });
    this.setState({ drafts: result });
  }


  queryDraftList(drafts) {
    this.drafts = [] ;
    var that = this ;

    drafts.map((item)=>{
      DraftStore.queryDraft(item).then(x=> this.drafts.push(x));
      that.setDraftList(this.drafts);
    }) ;
  }

  getDraftList() {
    var that = this ;

    CompanyStore.getCompany().then( (r) => {
      r.getDrafts(null, {from:web3.eth.coinbase}).then(
        that.queryDraftList.bind(that));
      }
    );
  }

  componentWillMount(){
    this.getDraftList();
  }

  render() {
    return (
      <Table columns={columns}
        dataSource={this.state.drafts}
        className="table" />
    );
  }
}
