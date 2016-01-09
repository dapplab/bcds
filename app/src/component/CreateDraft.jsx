import React from 'react';
import {Form, Input, Select, Checkbox, Radio, DatePicker, Row, Col, Button, message} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
import BankStore from "../stores/BankStore";
import CompanyStore from "../stores/CompanyStore";

const CreateDraft = React.createClass({
  mixins: [Form.ValueMixin],

  getInitialState() {
    return {
      formData:{} ,
      banks: [] ,
      companies:[]
    };
  },

  componentWillMount() {
    var that = this ;
    BankStore.getBanks().then((x)=>{
      that.setState({banks:x});
    })


    CompanyStore.getCompanies().then((y)=>{
      that.setState({companies:y});
    })
  },

  createDraft(form) {

    if(!form.bank ) {
      message.error( "Please choice your acceptance bank");
      return;
    }

    var bank = Bank.at(form.bank.contract) ;
    var from = {from: form.bank.account};

    if( !form.payer ) {
      message.error( "Please choice payer company");
      return;
    }

    if( !form.payee ) {
      message.error( "Please choice payee company");
      return;
    }


    bank.CreatedDraft(null, 'latest', function(err, res){
      window.draft = Draft.at(res.args.draft);
    });

    bank.createDraft(form.payer.contract, form.payee.contract, form.amount, form.rate, form.mature, from).then(function(txid){});
  },

  handleSubmit(e) {
    e.preventDefault();

    this.createDraft(this.state.formData) ;
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
            <Select id="draft-payee" onChange={this.setValue.bind(this,'payee')} name="payee" placeholder="Please enter..." >
              {
                this.state.companies.map( (x) => {
                <Option value={x}> {x.name} </Option> } )
              }
              </Select>
          </FormItem>
          <FormItem
            label="出票金额："
            labelCol={{span: 6}}
            wrapperCol={{span: 14}}>
            <Input id="draft-amount" onChange={this.setValue.bind(this,'amount')} name="amount" placeholder="Please enter..." />
          </FormItem>
          <FormItem
            label="利率："
            labelCol={{span: 6}}
            wrapperCol={{span: 14}}>
            <Input id="draft-rate" onChange={this.setValue.bind(this,'rate')} name="rate" placeholder="Please enter..." />
          </FormItem>
          <FormItem
            label="付款日期："
            labelCol={{span: 6}}
            wrapperCol={{span: 14}}>
            <DatePicker id="draft-mature" onChange={this.setValue.bind(this,'mature')} name="mature" size="small" />
          </FormItem>
          <FormItem
            label="申请人："
            labelCol={{span: 6}}
            wrapperCol={{span: 14}}>
            <Select id="draft-payer" onChange={this.setValue.bind(this,'payer')} name="payer" placeholder="Please enter..." >
              {
                this.state.companies.map( (x) => {
                  <Option value={x}> {x.name} </Option> } )
              }
            </Select>
          </FormItem>
          <FormItem
            label="出票行："
            labelCol={{span: 6}}
            wrapperCol={{span: 14}}>
            <Select id="draft-bank" size="large" name="bank" defaultValue="选择银行" onChange={this.setValue.bind(this,'bank')} style={{width:200}}>
              { this.state.banks.map( (x) => {
                return <Option value={x}>{x.name}</Option> ;
              } ) }
            </Select>
          </FormItem>
          <FormItem
            label="备注："
            labelCol={{span: 6}}
            wrapperCol={{span: 14}}>
            <Input type="textarea" id="draft-memo" name="memo" onChange={this.setValue.bind(this,'memo')} rows="3" />
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
