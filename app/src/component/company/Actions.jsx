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
    let status = 'received';
    let buttons;
    switch(status) {
      case "issued":
        buttons = <SendButton draft={this.props.draft} />;
        break;
      case "received":
        buttons = <div>
          <TransferButton draft={this.props.draft} />
          <DiscountButton draft={this.props.draft} />
          <AskButton draft={this.props.draft} />
        </div>;
        break;
      case "completed":
        break
    };
    
    return (
      <div className="draft-actions">
        <a href="/#/draft/1">Show</a> &nbsp;&nbsp;
        {buttons}
      </div>
    );

  }

}

export default Actions;
