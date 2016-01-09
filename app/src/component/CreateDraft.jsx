import React from 'react';
import {Form, Input, Select, Checkbox, Radio, DatePicker, Row, Col, Button} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
import BankStore from "../stores/BankStore" ;

const CreateDraft = React.createClass({
  mixins: [Form.ValueMixin],
  
  getInitialState() {
    return {
      formData: {
        draftPayee: 'me'
      }
    };
  },

  createDraft(amount, rate, mature) {
    var bank = Bank.deployed();
    var from = {from: web3.eth.coinbase};

    var ali = Company.deployed();
    var qq = Company.at('0x3631836ee2f08e0f7d0fffb5605bc4868b3ddba9');

    bank.CreatedDraft(null, 'latest', function(err, res){
      window.draft = Draft.at(res.args.draft);
    });
    bank.createDraft(ali.address, qq.address, amount, rate, mature, from).then(function(txid){});
  },

  handleSubmit(e) {
    e.preventDefault();
    this.createDraft(12, 24, 36);
    //You got a window.draft in javascript console after you click
    //submit button
    console.log('收到表单值~~~ ：' + JSON.stringify(this.state.formData, function(k, v) {
      if (typeof v === 'undefined') {
        return '';
      }
      return v;
    }));
  },

  render() {
    const formData = this.state.formData;
    return (
      <div className="main-container-center form-general">
        <Form horizontal onSubmit={this.handleSubmit}>
          <FormItem
            label="收款人："
            labelCol={{span: 6}}
            wrapperCol={{span: 14}}>
            <Input id="draft-payee" name="draftPayee" placeholder="Please enter..." />
          </FormItem>
          <FormItem
            label="出票金额："
            labelCol={{span: 6}}
            wrapperCol={{span: 14}}>
            <Input id="draft-amount" placeholder="Please enter..." />
          </FormItem>
          <FormItem
            label="利率："
            labelCol={{span: 6}}
            wrapperCol={{span: 14}}>
            <Input id="draft-rate" placeholder="Please enter..." />
          </FormItem>
          <FormItem
            label="付款日期："
            labelCol={{span: 6}}
            wrapperCol={{span: 14}}>
            <DatePicker id="draft-mature" size="small" />
          </FormItem>
          <FormItem
            label="申请人："
            labelCol={{span: 6}}
            wrapperCol={{span: 14}}>
            <Input id="draft-payer" placeholder="Please enter..." />
          </FormItem>
          <FormItem
            label="出票行："
            labelCol={{span: 6}}
            wrapperCol={{span: 14}}>
            <Select id="draft-bank" size="large" defaultValue="选择银行" style={{width:200}}>
              { BankStore.banks.map( (x) => {
                return <Option key={x.key} value={x.addr}>{x.bankName}</Option> ;
              } ) }
            </Select>
          </FormItem>
          <FormItem
            label="备注："
            labelCol={{span: 6}}
            wrapperCol={{span: 14}}>
            <Input type="textarea" id="draft-memo" rows="3" />
          </FormItem>

          <Row>
            <Col span="16" offset="6">
              <Button type="primary" htmlType="submit">Submit</Button>
            </Col>
          </Row>

        </Form>
      </div>
    );
  }

});

export default CreateDraft;
