import React from 'react';
import { Table, Tag } from 'antd';

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

// const columns = [
//   {title: 'Draft no.', dataIndex: 'draftNo', key: 'draftNo'},
//   {title: 'Amount', dataIndex: 'amount', key: 'amount'},
//   {title: 'Rate', dataIndex: 'rate', key: 'rate'},
//   {title: 'Payer', dataIndex: 'payer', key: 'payer'},
//   {title: 'Issue Bank', dataIndex: 'bank', key: 'bank'},
//   {title: 'Payee', dataIndex: 'payee', key: 'payee'},
//   {title: 'Mature time', dataIndex: 'mature', key: 'mature'},
//   {title: 'Status', dataIndex: 'status', render: renderStatus},
//   {title: 'Actions', dataIndex: '', key: 'x', render: renderAction}
// ];

function setup(){
  // var from = { from: web3.eth.coinbase, gas: 10000000 };
  // var cb = function(company){ window.company = company };
  // Company.new('abc', from).then(cb);
  // com2 = Company.deployed();
  // com2.setName('abab', from).then(function(){});

  // company.addDraft('0x11', from).then(function(){});
  // company.addDraft('0x12', from).then(function(){});
  // company.addDraft('0x13', from).then(function(){});

  window.company = Company.at('0x3a90098ed1c2e37105533a12e5b70a99af1099ce');
}

const columns = [
  {title: 'Draft no.', dataIndex: 'draftNo', key: 'draftNo'}
];

const data = [
  {key: 1, draftNo: '0001201601108989', amount: '100,000', rate: '8%', payer: '杭州娃哈哈股份有限公司', bank: '中国工商银行高新支行', payee: '美丽健乳业有限公司', mature: '2017-1-10 11:59', memo: '2016一季度牛奶货款'},
  {key: 2, draftNo: '0001201601108989', amount: '100,000', rate: '8%', payer: '杭州娃哈哈股份有限公司', bank: '中国工商银行高新支行', payee: '美丽健乳业有限公司', mature: '2017-1-10 11:59', memo: '2016一季度牛奶货款'},
];

export default class CompanyDrafts extends React.Component {

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

  getDraftList(){
    if(window.company){
      var from = { from: web3.eth.coinbase, gas: 10000000 };
      window.company.getDrafts(null, from).then(this.setDraftList.bind(this));
    }
  }

  componentWillMount(){
    setup();
    this.getDraftList();
    // this.setState({ drafts: [{key: 1, draftNo: "0x0000000000000000000000000000000000000013"}] });
  }

  render() {
    return (
      <Table columns={columns}
        dataSource={this.state.drafts}
        className="table" />
    );
  }
}
