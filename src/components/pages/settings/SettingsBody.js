import React from 'react'
import { Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'

const SettingsBody = () => {
  return (
    <section id="details">
      <Container>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <h4>Edit Post</h4>
              </CardHeader>
              <CardBody>
                <Form>
                  <FormGroup tag="fieldset">
                    <legend>Allow User Registration</legend>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" value="Yes" checked/> Yes
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" value="No" /> No
                      </Label>
                    </FormGroup>
                  </FormGroup>
                  <FormGroup tag="fieldset">
                    <legend>Homepage Format</legend>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" value="Posts" checked/> Blog Page
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" value="Page" /> Homepage
                      </Label>
                    </FormGroup>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default SettingsBody
