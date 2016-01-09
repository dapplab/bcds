import React from 'react';
import { Form, Input, Select, Modal, Button } from 'antd';

const FormItem = Form.Item;

class Ask extends React.Component {

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
    console.log('apply discount...', this.props.draft)
  };

  render() {

    return (
      <div className="draft-transfer">
        <Button type="ghost" size="small" onClick={this.showModal}>Ask</Button>
        <Modal title="挂单贴现 ask" visible={this.state.visible} onCancel={this.handleCancel}>
          <Form horizontal onSubmit={this.handleSubmit}>
            <FormItem
              label="贴现率 rate："
              labelCol={{span: 6}}
              wrapperCol={{span: 14}}>
              <Input id="apply-ask" name="askRate" placeholder="Please enter the discount rate..." />
            </FormItem>
          </Form>
        </Modal>
      </div>
    );

  }

}

export default Ask;
