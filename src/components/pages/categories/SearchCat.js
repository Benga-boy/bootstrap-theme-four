import React from 'react'
import { Button, Col, Container, Input, InputGroup, InputGroupAddon, Row } from 'reactstrap'

const SearchCat = () => {
  return (
    <section id="search" className="py-4 mb-4 bg-light">
      <Container>
        <Row>
          <Col md="6" className="ml-auto">
            <InputGroup>
              <InputGroupAddon addonType="append">
                <Button color="success">
                  Search
                </Button>
                <Input type="text" placeholder="Search Categories...." />
              </InputGroupAddon>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default SearchCat
