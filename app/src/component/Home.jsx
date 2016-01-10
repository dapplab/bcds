import React from 'react';
import { Row, Col, Button } from 'antd';
import pic from '../../images/landing.jpg';

export default class Home extends React.Component {
  render() {
    return (
       <div className="main-container-center">
        <Row type="flex" justify="center" align="top">
          <Col span="12">
            <div className="banner-entry">
              <h2 className="entry-title">BCDS</h2>
              <div className="subtitle">Blockchain Commercial Draft System</div>
              <div className="entry-slogan">
                The goal of BCDS(Blockchain Commerical Draft System) is to move the whole lifecycle of Draft(Bill of Exchange) onto blockchain. The lifecycle includes issue, transfer, endorsement, discount for cash, trading and finally retrieval. The blockchain technology enables verifiability, uniqueness and immutability, all of which prevent double spending and forgery of stamps. This is an open, p2p network that allow all participants to join.
              </div>
              <Button type="ghost" size="big">GET STARTED</Button>
            </div>
          </Col>
          <Col span="12">
            <div className="banner-img">
              <img src={pic} />
            </div>
          </Col>
        </Row>
      </div>
    ) ;
  }

}
