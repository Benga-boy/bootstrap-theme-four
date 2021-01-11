import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const UserHeading = () => {
  return (
    <header id="main-header" className="py-2 bg-warning text-white">
      <Container>
        <Row>
          <Col md="6">
            <h1> <i className="fas fa-users"> Users</i> </h1>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default UserHeading
