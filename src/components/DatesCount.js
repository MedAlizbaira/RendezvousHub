import React from 'react'

import {Col, Row } from "react-bootstrap";
const DatesCount = ({person}) => {
  return (
    <div>
    <Row className="justify-content-center my-2">
    <Col sm="8" className="">
      Tu as {person.length} rendez-vous aujourd'hui
    </Col>
  </Row>
    </div>
  )
}

export default DatesCount
