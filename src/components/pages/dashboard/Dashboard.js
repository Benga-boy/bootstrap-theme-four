import React, { Fragment } from 'react'
import { Container } from 'reactstrap'
import Actions from './Actions'
import Header from './Header'
import Posts from './Posts'

const Dashboard = () => {
  return (
    <Fragment>
      <Header />
      <Actions />
      <Container>
        <Posts />
      </Container>
    </Fragment>
  )
}

export default Dashboard
