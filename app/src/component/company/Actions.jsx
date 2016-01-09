import React from 'react';
import { Form, Input, Select, Modal, Button } from 'antd';
import SendButton from './Send';
import TransferButton from './Transfer';
import DiscountButton from './Discount';
import AskButton from './Ask';

const FormItem = Form.Item;

class Actions extends React.Component {

  constructor() {
    super()
    this.state = {
      visible: false
    }
  }

  handleCancel = () => {
    this.setState({
      visible: false
    });
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  render() {

    console.log(this.props.draft)
    return (
      <div className="draft-actions">
        <a href="/#/draft/1">Show</a> &nbsp;&nbsp;
        <SendButton draft={this.props.draft} />
        <TransferButton draft={this.props.draft} />
        <DiscountButton draft={this.props.draft} />
        <AskButton draft={this.props.draft} />
      </div>
    );

  }

}

export default Actions;
