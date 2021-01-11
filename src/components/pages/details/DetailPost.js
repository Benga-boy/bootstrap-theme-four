import React, { useState } from 'react'
import { Card, CardBody, CardHeader, Col, Container, Form, Row, FormGroup, Input, Label, FormText } from 'reactstrap'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState } from 'draft-js'


const DetailPost = () => {
  // * Text Editor state
  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  // Text editor function
  const onEditorStateChange = (editorState) => setEditorState(editorState)


  return (
    <section id="details">
      <Container>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <h4>Edit Post</h4>
              </CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label>Title</Label>
                    <Input type="text" value="Post One" />
                  </FormGroup>
                  <FormGroup>
                    <Label>Category</Label>
                    <Input type="select" value="Business">
                      <option value="">Web Development</option>
                      <option value="">Tech Gadgets</option>
                      <option value="">Business</option>
                      <option value="">Health and Wellness</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label>Choose File</Label>
                    <Input type="file" />
                    <FormText>Max Size 3mb</FormText>
                  </FormGroup>
                  <FormGroup>
                    <Label>Body</Label>
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
        </Row>
      </Container>
    </section>
  )
}

export default DetailPost
