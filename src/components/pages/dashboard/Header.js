import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const Header = () => {
  return (
    <header id="main-header" className="py-2 bg-primary text-white">
      <Container>
        <Row>
          <Col md="6">
            <h1> <i className="fas fa-cog"> Dashboard</i> </h1>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header
