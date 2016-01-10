import React from 'react';
import { Table, Tag } from 'antd';
import Actions from './Actions';
import CompanyStore from './../../stores/CompanyStore';

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
  {title: 'Draft no.', dataIndex: 'draftNo', key: 'draftNo'},
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
    var result = drafts.map((no, index) => {
      return { key: index + 1, draftNo: no }
    });
    this.setState({ drafts: result });
  }

  getDraftList() {
    var that = this ;

    CompanyStore.getCompany().then( (r) => {
      r.getDrafts(null, {from:web3.eth.coinbase}).then(that.setDraftList.bind(that));
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
