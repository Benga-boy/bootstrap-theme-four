import React, { Fragment } from 'react'
import { Container } from 'reactstrap'
import SettingsActions from './SettingsActions'
import SettingsBody from './SettingsBody'
import SettingsHeader from './SettingsHeader'

const Settings = () => {
  return (
    <Fragment>
      <SettingsHeader />
      <SettingsActions />
      <Container>
        <SettingsBody />
      </Container>
    </Fragment>
  )
}

export default Settings
