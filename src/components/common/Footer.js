import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const Footer = () => {
  return (
    <footer id="main-footer" className="bg-dark text-white mt-5 p-5">
      <Container>
        <Row>
          <Col>
            <p className="lead text-center">
              Copyright &copy; {new Date().getFullYear()} Blogen
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
