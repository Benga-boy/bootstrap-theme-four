import React, { Fragment } from 'react'
import { Container } from 'reactstrap'
import ProfileActions from './ProfileActions'
import ProfileBody from './ProfileBody'
import ProfileHeader from './ProfileHeader'

const Profile = () => {
  return (
    <Fragment>
      <ProfileHeader />
      <ProfileActions />
      <Container>
        <ProfileBody />
      </Container>
    </Fragment>
  )
}

export default Profile
