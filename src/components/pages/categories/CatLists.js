import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Card, CardHeader, Table, Col, Nav, Pagination, PaginationItem, PaginationLink } from 'reactstrap'

const CatLists = () => {
  return (
    <section id="categories">
      <Container>
        <Row>
          <Col md="9">
            <Card>
              <CardHeader>
                <h4>Latest Categories</h4>
              </CardHeader>
              <Table striped>
                <thead className="thead-dark">
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Date</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Fitness</td>
                    <td>28 June 2020</td>
                    <td>
                      <Link to="/details" className="btn btn-secondary">
                        <i className="fas fa-angle-double-right"></i> Details
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Health and Wellness</td>
                    <td>30 June 2020</td>
                    <td>
                      <Link to="/details" className="btn btn-secondary">
                        <i className="fas fa-angle-double-right"></i> Details
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Web Dev</td>
                    <td>05 July 2020</td>
                    <td>
                      <Link to="/details" className="btn btn-secondary">
                        <i className="fas fa-angle-double-right"></i> Details
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Tech Gadgets</td>
                    <td>10 July 2020</td>
                    <td>
                      <Link to="/details" className="btn btn-secondary">
                        <i className="fas fa-angle-double-right"></i> Details
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Nav className="m-auto">
                <Pagination>
                  <PaginationItem disabled>
                    <PaginationLink previous></PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink>2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink>3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem >
                    <PaginationLink next></PaginationLink>
                  </PaginationItem>
                </Pagination>
              </Nav>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CatLists
