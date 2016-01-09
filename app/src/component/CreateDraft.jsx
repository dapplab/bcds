import React from 'react';
import {Form, Input, Select, Checkbox, Radio, DatePicker} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
import BankStore from "../stores/BankStore" ;

export default class CreateDraft extends React.Component {

  render() {
    return (
      <div className="form-general">
        <Form horizontal>
          <FormItem
            label="收款人："
            labelCol={{span: 6}}
            wrapperCol={{span: 14}}>
            <Input id="draft-payee" placeholder="Please enter..." />
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

        </Form>
      </div>
    );
  }

}
