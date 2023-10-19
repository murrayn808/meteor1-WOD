import React from 'react';
import { Row, Col, Image, Container } from 'react-bootstrap';


const BottomFooter = () => (
  <footer className="mt-auto">
    <Row>
      <Col className="text-center">
        <h2>Lunch Served Daily</h2>
        <h3>11AM - 3PM</h3>
      </Col>
      <Col className="text-center">
        <h2>Dinner Served Daily</h2>
        <h3>4:30 - 9PM</h3>
      </Col>
    </Row>
    <Row>
      <Image src="/images/wod-buzzs-mahalo.png" />
    </Row>
  </footer>
);

export default BottomFooter;

