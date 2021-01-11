import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Card, CardHeader, Table, Col, Nav, Pagination, PaginationItem, PaginationLink } from 'reactstrap'

const UserLists = () => {
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
                    <th>Name</th>
                    <th>Email</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Jay Nnanyere</td>
                    <td>jnnanyere@email.com</td>
                    <td>
                      <Link to="/details" className="btn btn-secondary">
                        <i className="fas fa-angle-double-right"></i> Details
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Harry Styles</td>
                    <td>h.styles@email.com</td>
                    <td>
                      <Link to="/details" className="btn btn-secondary">
                        <i className="fas fa-angle-double-right"></i> Details
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Kanye West</td>
                    <td>keywest@email.com</td>
                    <td>
                      <Link to="/details" className="btn btn-secondary">
                        <i className="fas fa-angle-double-right"></i> Details
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Justin Bieber</td>
                    <td>belieber@email.com</td>
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

export default UserLists
