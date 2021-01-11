import React, { useState } from 'react'
import { Button, Col, Container, Form, FormGroup, FormText, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState } from 'draft-js'


const Actions = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [catModal, setCatModal] = useState(false)
  const [userModal, setUserModal] = useState(false)

  // * Text Editor state
  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  // Text editor function
  const onEditorStateChange = (editorState) => setEditorState(editorState)

  const toggleModal = () => setIsOpen(!isOpen)
  const toggleCatModal = () => setCatModal(!catModal)
  const toggleUserModal = () => setUserModal(!userModal)

  return (
    <section id="actions" className="py-4 mb-4 bg-light">
      <Container>
        <Row>
          <Col md="3">
            <Button onClick={toggleModal} color="primary" block> <i className="fas fa-plus"></i> Add Post </Button>
            <Modal toggle={toggleModal} isOpen={isOpen}>
              <ModalHeader toggle={toggleModal} className="bg-primary text-white">
                Add Post
              </ModalHeader>
              <ModalBody>
                <Form>
                  <FormGroup>
                    <Label>Title</Label>
                    <Input type="text" />
                  </FormGroup>
                  <FormGroup>
                    <Label>Category</Label>
                    <Input type="select">
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
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={toggleModal}>Save Changes</Button>
              </ModalFooter>
            </Modal>
          </Col>
          <Col md="3">
            <Button onClick={toggleCatModal} color="success" block> <i className="fas fa-plus"></i> Add Category </Button>
            <Modal isOpen={catModal}>
              <ModalHeader toggle={toggleCatModal} className="bg-success text-white">
                Add Category
              </ModalHeader>
              <ModalBody>
                <Form>
                  <FormGroup>
                    <Label>Title</Label>
                    <Input type="text" />
                  </FormGroup>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button color="success" onClick={toggleCatModal}>Save Changes</Button>
              </ModalFooter>
            </Modal>
          </Col>
          <Col md="3">
            <Button onClick={toggleUserModal} color="warning" block> <i className="fas fa-plus"></i> Add User </Button>
            <Modal isOpen={userModal}>
              <ModalHeader toggle={toggleUserModal} className="bg-warning text-white">
                Add User
              </ModalHeader>
              <ModalBody>
                <Form>
                  <FormGroup>
                    <Label>Name</Label>
                    <Input type="text" />
                  </FormGroup>
                  <FormGroup>
                    <Label>Email</Label>
                    <Input type="email" />
                  </FormGroup>
                  <FormGroup>
                    <Label>Password</Label>
                    <Input type="password" />
                  </FormGroup>
                  <FormGroup>
                    <Label>Password Confirmation</Label>
                    <Input type="password" />
                  </FormGroup>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button color="warning" onClick={toggleUserModal}>Save Changes</Button>
              </ModalFooter>
            </Modal>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Actions
