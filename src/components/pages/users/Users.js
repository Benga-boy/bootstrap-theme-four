import React, { Fragment } from 'react'
import UserHeading from './UserHeading'
import UserLists from './UserLists'
import UserSearch from './UserSearch'

const Users = () => {
  return (
    <Fragment>
      <UserHeading />
      <UserSearch />
      <UserLists />
    </Fragment>
  )
}

export default Users
