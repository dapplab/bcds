import React from 'react';
import { Row, Col } from 'antd';

export default class Exchange extends React.Component {
  render() {
    return (
      <div className="main-container-center">
        <Row type="flex" justify="center" align="top">
          <Col span="4"><div value="100">.col-4</div></Col>
          <Col span="4"><div value="50">.col-4</div></Col>
          <Col span="4"><div value="120">.col-4</div></Col>
          <Col span="4"><div value="80">.col-4</div></Col>
        </Row>

      </div>
    ) ;
  }

}
