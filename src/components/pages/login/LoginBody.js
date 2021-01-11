import React from 'react'
import { Container, Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap'

const LoginBody = () => {
  return (
    <section id="details">
      <Container>
        <Row>
          <Col md="6" className="mx-auto">
            <Card>
              <CardHeader>
                <h4>Account Login</h4>
              </CardHeader>
              <CardBody>
                <Form action="/dashboard">
                  <FormGroup>
                    <Label>Email</Label>
                    <Input type="email" />
                  </FormGroup>
                  <FormGroup>
                    <Label>Password</Label>
                    <Input type="password" />
                  </FormGroup>
                  <Button color="primary">Login</Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default LoginBody
