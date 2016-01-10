import React from 'react';
import { Table, Tag } from 'antd';
import Actions from './Actions';
import CompanyStore from './../../stores/CompanyStore';
import DraftStore from '../../stores/DraftStore' ;

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
  {title: 'Mature', dataIndex: 'mature'},
  {title: 'Actions', dataIndex: 'actions', key: 'x', render: function(text, record) {return(<Actions draft={record} />)}}
];


export default class CompanyReceived extends React.Component {


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
      that.setDraftList(that.drafts);
    }) ;
  }

  getDraftList() {
    var that = this ;

    CompanyStore.getCompany().then( (r) => {
        r.getReceivedDrafts(null, {from:web3.eth.coinbase}).then(
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
        expandedRowRender={expandedRowRender}
        dataSource={this.state.drafts}
        className="table" />
    );
  }
}
