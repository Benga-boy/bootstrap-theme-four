import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardHeader, Col, Container, Row, Table } from 'reactstrap'

const Posts = () => {
  return (
    <section id="posts">
      <Container>
        <Row>
          <Col md="9">
            <Card>
              <CardHeader>
                <h4>Latest Posts</h4>
              </CardHeader>
              <Table striped>
                <thead className="thead-dark">
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Post One</td>
                    <td>Web Dev</td>
                    <td>28 June 2020</td>
                    <td>
                      <Link to="/details" className="btn btn-secondary">
                        <i className="fas fa-angle-double-right"></i> Details
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Post Two</td>
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
                    <td>Post Three</td>
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
                    <td>Post Four</td>
                    <td>Web Dev</td>
                    <td>10 July 2020</td>
                    <td>
                      <Link to="/details" className="btn btn-secondary">
                        <i className="fas fa-angle-double-right"></i> Details
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Post Five</td>
                    <td>Business</td>
                    <td>16 July 2020</td>
                    <td>
                      <Link to="/details" className="btn btn-secondary">
                        <i className="fas fa-angle-double-right"></i> Details
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
          <Col md="3">
            <Card className="bg-primary text-white text-center mb-3">
              <CardBody>
                <h3>Posts</h3>
                <h4 className="display-4">
                  <i className="fas fa-pencil-alt"></i> 6
                </h4>
                <Link className="btn btn-outline-ligh btn-sm" to="/posts">View</Link>
              </CardBody>
            </Card>
            <Card className="bg-success text-white text-center mb-3">
              <CardBody>
                <h3>Categories</h3>
                <h4 className="display-4">
                  <i className="fas fa-folder"></i> 4
                </h4>
                <Link className="btn btn-outline-ligh btn-sm" to="/categories">View</Link>
              </CardBody>
            </Card>
            <Card className="bg-warning text-white text-center mb-3">
              <CardBody>
                <h3>Users</h3>
                <h4 className="display-4">
                  <i className="fas fa-users"></i> 4
                </h4>
                <Link className="btn btn-outline-ligh btn-sm" to="/users">View</Link>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Posts
