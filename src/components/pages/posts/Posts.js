import React, { Fragment } from 'react'
import { Container } from 'reactstrap'
import PostHeader from './PostHeader'
import PostLists from './PostLists'
import Search from './Search'


const Posts = () => {
  return (
    <Fragment>
      <PostHeader />
      <Search />
      <Container>
        <PostLists />
      </Container>
    </Fragment>
  )
}

export default Posts
