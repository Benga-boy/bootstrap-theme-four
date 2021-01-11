import React, { Fragment } from 'react'
import { Container } from 'reactstrap'
import LoginAction from './LoginAction'
import LoginBody from './LoginBody'
import LoginHeader from './LoginHeader'

const Login = () => {
  return (
    <Fragment>
      <LoginHeader />
      <LoginAction />
      <Container>
        <LoginBody />
      </Container>
    </Fragment>
  )
}

export default Login
