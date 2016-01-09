import React from 'react';
import { Form, Input, Select, Modal, Button } from 'antd';

const FormItem = Form.Item;

class Send extends React.Component {

  handleSend = () => {
    console.log('sending...', this.props.draft)
  };

  render() {
    return (
      <Button type="primary" size="small" onClick={this.handleSend}>Send</Button>        
    );
  }

}

export default Send;
