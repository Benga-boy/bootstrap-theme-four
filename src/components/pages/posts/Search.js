import React from 'react'
import { Button, Col, Container, Input, InputGroup, InputGroupAddon, Row } from 'reactstrap'

const Search = () => {
  return (
    <section id="search" className="py-4 mb-4 bg-light">
      <Container>
        <Row>
          <Col md="6" className="ml-auto">
            <InputGroup>
              <InputGroupAddon addonType="append">
                <Button color="primary">
                    Search
                </Button>
                <Input type="text" placeholder="Search Posts...." />
              </InputGroupAddon>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Search
