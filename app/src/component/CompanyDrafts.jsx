import React from 'react';
import { Table, Tag } from 'antd';

function renderAction() {
  return (
    <Tag color="green">已承兑</Tag>
  );
}

function expandedRowRender(record) {
  return <p>{record.memo}</p>;
}

const columns = [
  {title: 'Draft no.', dataIndex: 'draftNo', key: 'draftNo'},
  {title: 'Amount', dataIndex: 'amount', key: 'amount'},
  {title: 'Rate', dataIndex: 'rate', key: 'rate'},
  {title: 'Payer', dataIndex: 'payer', key: 'payer'},
  {title: 'Issue Bank', dataIndex: 'bank', key: 'bank'},
  {title: 'Payee', dataIndex: 'payee', key: 'payee'},
  {title: 'Mature time', dataIndex: 'mature', key: 'mature'},
  {title: 'Status', dataIndex: '', key: 'x', render: renderAction}
];

const data = [
  {key: 1, draftNo: '0001201601108989', amount: '100,000', rate: '8%', payer: '杭州娃哈哈股份有限公司', bank: '中国工商银行高新支行', payee: '美丽健乳业有限公司', mature: '2017-1-10 11:59', memo: '2016一季度牛奶货款'},
  {key: 2, draftNo: '0001201601108989', amount: '100,000', rate: '8%', payer: '杭州娃哈哈股份有限公司', bank: '中国工商银行高新支行', payee: '美丽健乳业有限公司', mature: '2017-1-10 11:59', memo: '2016一季度牛奶货款'},
];

export default class CompanyDrafts extends React.Component {
  render() {
    return (
      <Table columns={columns}
  expandedRowRender={expandedRowRender}
  dataSource={data}
  className="table" />
    );
  }
}
