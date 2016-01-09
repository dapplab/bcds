import React from 'react';
import { Form, Input, Select, Modal, Button } from 'antd';

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
        <Button type="primary" onClick={this.showModal}>Transfter</Button>
        <Modal title="背书转让 transfer" visible={this.state.visible} onCancel={this.handleCancel}>
          <Form horizontal>
            <FormItem
              label="转让给："
              labelCol={{span: 6}}
              wrapperCol={{span: 14}}>
              <Input id="draft-holder" placeholder="Please enter..." />
            </FormItem>
          </Form>
        </Modal>
      </div>
    );

  }

}

export default Actions;
