import React, { useState } from 'react'
import { Container, Row, Col, CardBody, Card, CardHeader, Form, Label, Input, FormGroup, Button } from 'reactstrap'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState } from 'draft-js'
import { avatar } from '../../../img/export'

const ProfileBody = () => {
  // * Text Editor state
  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  // Text editor function
  const onEditorStateChange = (editorState) => setEditorState(editorState)



  return (
    <section id="details">
      <Container>
        <Row>
          <Col md="9">
            <Card>
              <CardHeader>
                <h4>Edit Profile</h4>
              </CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label>Name</Label>
                    <Input type="text" value="Benga Lash" />
                  </FormGroup>
                  <FormGroup>
                    <Label>Email</Label>
                    <Input type="email" value="benga@email.com" />
                  </FormGroup>
                  <FormGroup>
                    <Label>Bio</Label>
                    <Editor 
                      editorState={editorState}
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                      onEditorStateChange={onEditorStateChange}
                    />
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <h3>Your Avatar</h3>
            <img src={avatar[0].value.default} alt="Benga Blogen" className="d-block img-fluid mb-3"/>
            <Button color="primary">Edit Image</Button>
            <Button color="danger" className="ml-3">Delete Image</Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ProfileBody
