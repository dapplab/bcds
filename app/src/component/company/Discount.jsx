import React from 'react';
import { Form, Input, Select, Modal, Button } from 'antd';

const FormItem = Form.Item;

class Discount extends React.Component {

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
        <Button type="ghost" size="small" onClick={this.showModal}>Discount</Button>
        <Modal title="申请贴现 apply discount" visible={this.state.visible} onCancel={this.handleCancel}>
          <Form horizontal onSubmit={this.handleSubmit}>
            <FormItem
              label="贴现银行："
              labelCol={{span: 6}}
              wrapperCol={{span: 14}}>
              <Input id="apply-bank" name="discountBank" placeholder="Please enter the bank you'd apply to..." />
            </FormItem>
          </Form>
        </Modal>
      </div>
    );

  }

}

export default Discount;
