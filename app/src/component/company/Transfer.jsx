import React from 'react';
import { Form, Input, Select, Modal, Button } from 'antd';

const FormItem = Form.Item;

class Transfer extends React.Component {

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

  handleSubmit = () => {
    console.log('transfer to...', this.props.draft)
  };

  render() {

    return (
      <div className="draft-transfer">
        <Button type="primary" onClick={this.showModal}>Transfter</Button>
        <Modal title="背书转让 transfer" visible={this.state.visible} onCancel={this.handleCancel}>
          <Form horizontal onSubmit={this.handleSubmit}>
            <FormItem
              label="转让给："
              labelCol={{span: 6}}
              wrapperCol={{span: 14}}>
              <Input id="draft-holder" placeholder="Please enter..." />

              <Button type="primary" htmlType="submit">Submit</Button>
            </FormItem>
          </Form>
        </Modal>
      </div>
    );

  }

}

export default Transfer;
