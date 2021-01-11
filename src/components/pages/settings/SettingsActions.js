import React from 'react'
import { Button, Col, Container, Row } from 'reactstrap'

const SettingsActions = () => {
  return (
    <section id="actions" className="py-4 mb-4 bg-light">
      <Container>
        <Row>
          <Col md="3">
            <Button color="light" block> <i className="fas fa-arrow-left"></i> Back To Dashboard </Button>
          </Col>
          <Col md="3">
            <Button color="success" block> <i className="fas fa-check"></i> Save Changes </Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default SettingsActions
