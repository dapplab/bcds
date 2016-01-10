import React from 'react';
import { Row, Col, Button, Spin } from 'antd';

export default class Exchange extends React.Component {
  render() {
    return (
      <div className="main-container-center exchange">
        <Row type="flex" justify="center" align="top">
          <Col span="8">
            <div className="box draft">
              <table className="table">
                <thead>
                  <tr>
                    <th className="">Draft no. 787878</th>
                    <th className="align-right">Issued Time 2016-01-10</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="draft-label">Amount <p className="value">¥1000,000.00</p></td>
                    <td className="draft-label">Mature time <p className="value">2017-01-10 12:00</p></td>
                  </tr>
                  <tr>
                    <td className="draft-label">Payer <p className="value">WanXiang</p></td>
                    <td className="draft-label">Payee <p className="value">Deloitte</p></td>
                  </tr>
                  <tr>
                    <td className="draft-label" colSpan="2">Issue Bank <p className="value">ICBC</p></td>
                  </tr>
                </tbody>
              </table>
              <div className="align-right action"><Button type="primary">BID</Button></div>
            </div>
          </Col>
          <Col span="8">
            <div className="box draft">
              <table className="table">
                <thead>
                  <tr>
                    <th className="">Draft no. 787878</th>
                    <th className="align-right">Issued Time 2016-01-10</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="draft-label">Amount <p className="value">¥1000,000.00</p></td>
                    <td className="draft-label">Mature time <p className="value">2017-01-10 12:00</p></td>
                  </tr>
                  <tr>
                    <td className="draft-label">Payer <p className="value">WanXiang</p></td>
                    <td className="draft-label">Payee <p className="value">Deloitte</p></td>
                  </tr>
                  <tr>
                    <td className="draft-label" colSpan="2">Issue Bank <p className="value">ICBC</p></td>
                  </tr>
                </tbody>
              </table>
              <div className="align-right action"><Button type="primary">BID</Button></div>
            </div>
          </Col>
          <Col span="8">
            <div className="box draft">
              <table className="table">
                <thead>
                  <tr>
                    <th className="">Draft no. 787878</th>
                    <th className="align-right">Issued Time 2016-01-10</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="draft-label">Amount <p className="value">¥1000,000.00</p></td>
                    <td className="draft-label">Mature time <p className="value">2017-01-10 12:00</p></td>
                  </tr>
                  <tr>
                    <td className="draft-label">Payer <p className="value">WanXiang</p></td>
                    <td className="draft-label">Payee <p className="value">Deloitte</p></td>
                  </tr>
                  <tr>
                    <td className="draft-label" colSpan="2">Issue Bank <p className="value">ICBC</p></td>
                  </tr>
                </tbody>
              </table>
              <div className="align-right action"><Button type="primary">BID</Button></div>
            </div>
          </Col>
        </Row>

        <Row>
          <div className="align-center spin">
            <Spin />
          </div>
        </Row>

      </div>
    ) ;
  }

}
