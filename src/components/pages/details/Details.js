import React, { Fragment } from 'react'
import { Container } from 'reactstrap'
import DetailPost from './DetailPost'
import DetailsActions from './DetailsActions'
import DetailsHeader from './DetailsHeader'

const Details = () => {
  return (
    <Fragment>
      <DetailsHeader />
      <DetailsActions />
      <Container>
        <DetailPost />
      </Container>
    </Fragment>
  )
}

export default Details
