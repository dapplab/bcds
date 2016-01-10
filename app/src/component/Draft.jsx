import React from 'react';
import {Timeline, Affix} from 'antd'
import qrcode from '../../images/qrcode-example.jpg'

export default class Draft extends React.Component {
  constructor() {
    super()
    this.state = {
      draft: null
    }
  }

  componentDidMount() {
    this.setState({
      draft: DraftStore.getById(this.props.params.id)
    })
  }

  render() {
    return(
      <div className="main-container-center">
        <Affix offset={50}>
          <p className="draft-qrcode">
            <img src={qrcode} />
            <br />
            扫一扫辩真伪
          </p>
        </Affix>
        <div className="draft-show">
          <table className="table">
            <thead>
              <tr>
                <th colSpan="4"><h2>银行电子汇票</h2></th>
              </tr>
              <tr>
                <th colSpan="2" className="">汇票号码: Draft no. 787878</th>
                <th colSpan="2" className="align-right">出票日期: 2016-01-10</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="draft-label">出票人 payer</td>
                <td>杭州娃哈哈</td>
                <td className="draft-label">收款人 payee</td>
                <td>美丽健乳业</td>
              </tr>
              <tr>
                <td className="draft-label">出票行 bank</td>
                <td>中国工商银行</td>
                <td className="draft-label">收款行 payee bank</td>
                <td>农村信用社</td>
              </tr>
              <tr>
                <td className="draft-label">金额 amount</td>
                <td colSpan="3" className="text-big">¥1000,000.00</td>
              </tr>
              <tr>
                <td className="draft-label">到期日 mature time</td>
                <td colSpan="3" className="text-small">2017-01-10 12:00</td>
              </tr>
            </tbody>
          </table>

          <div className="draft-log">
            <Timeline>
              <Timeline.Item color="green">
                <p>汇票创建</p> 
                <small>中国工商银行 2016-01-09 16:00</small>
              </Timeline.Item>
              <Timeline.Item color="red">
                <p>背书转让 xxx</p>
                <small>2016-01-12 12:23</small>
              </Timeline.Item>
              <Timeline.Item color="red">
                <p>背书转让 xxx</p>
                <small>2016-01-12 12:23</small>
              </Timeline.Item>
              <Timeline.Item color="red">
                <p>背书转让 xxx</p>
                <small>2016-01-12 12:23</small>
              </Timeline.Item>
              <Timeline.Item>
                <p>挂单贴现 贴现率5%</p>
                <small>2016-01-29 15:03</small>
              </Timeline.Item>
            </Timeline>
          </div>

        </div>
      </div>
    );
  }
}
