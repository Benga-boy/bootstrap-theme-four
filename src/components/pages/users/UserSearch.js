import React from 'react'
import { Button, Col, Container, Input, InputGroup, InputGroupAddon, Row } from 'reactstrap'


const UserSearch = () => {
  return (
    <section id="search" className="py-4 mb-4 bg-light">
      <Container>
        <Row>
          <Col md="6" className="ml-auto">
            <InputGroup>
              <InputGroupAddon addonType="append">
                <Button color="warning">
                  Search
                </Button>
                <Input type="text" placeholder="Search User...." />
              </InputGroupAddon>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default UserSearch
