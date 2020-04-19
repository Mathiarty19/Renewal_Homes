import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
// import Layout from '../components/layout' need validators
import { Button, Form, FormGroup, Label, Input  } from 'reactstrap'

class ContactMG extends Component {
  state = {
    user_name: '',
    user_email: '',
    user_phone: '',
    user_address: '',
    message: '',
  }
handleSubmit(e) {
    e.preventDefault()
    const { user_name, user_phone, user_email, user_address, message } = this.state
    let templateParams = {
      from_name: 'Renewal-Homes contact form',
      user_name: user_name,
      user_email: user_email,
      user_phone: user_phone,
      user_address: user_address,
      message: message,
     }
     emailjs.send(
      'gmail',
      'contact_form',
       templateParams,
      'user_aehcAIMfiaK6Iao11Sqid'
     )
     this.resetForm()
 }
resetForm() {
    this.setState({
        user_name: '',
        user_email: '',
        user_phone: '',
        user_address: '',
        message: '',
    })
  }
handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
render() {
    return (
      <>
        {/* <Layout> */}
        <div className="container">
          <h1 className="p-heading1">Contact Us</h1>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <div className="col-md-6 mx-auto">
            <FormGroup controlId="formBasicName">
              <Label className="text-muted">Name</Label>
              <Input
                type="text"
                name="user_name"
                value={this.state.user_name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'user_name')}
                placeholder="Name"
              />
            </FormGroup>
            <FormGroup controlId="formPhone">
              <Label className="text-muted">Phone</Label>
              <Input
                type="text"
                name="user_phone"
                value={this.state.user_phone}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'user_phone')}
                placeholder="Phone"
              />
            </FormGroup>
            <FormGroup controlId="formBasicEmail">
              <Label className="text-muted">Email address</Label>
              <Input
                type="email"
                name="user_email"
                value={this.state.user_email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'user_email')}
                placeholder="Enter email"
              />
            </FormGroup>
            <FormGroup controlId="formBasicSubject">
              <Label className="text-muted">Address</Label>
              <Input
                type="text"
                name="user_address"
                className="text-primary"
                value={this.state.user_address}
                onChange={this.handleChange.bind(this, 'user_address')}
                placeholder="Address"
              />
            </FormGroup>
            <FormGroup controlId="formBasicMessage">
              <Label className="text-muted">Message</Label>
              <Input
                type="textarea"
                name="message"
                className="text-primary"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
              />
            </FormGroup>
            <Button variant="primary" color="primary" type="submit">
              Submit
            </Button>
            </div>
          </Form>
          </div>
        {/* </Layout> */}
      </>
    )
  }
}
export default ContactMG