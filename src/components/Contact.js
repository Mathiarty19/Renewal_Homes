import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
// import Layout from '../components/layout' need validators
import { Button, Form, FormGroup, Label, Input  } from 'reactstrap'

class ContactPage extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  }
handleSubmit(e) {
    e.preventDefault()
    const { name, phone, email, address, message } = this.state
    let templateParams = {
      from_name: 'Renewal-Homes',
      address: address,
      message_html: message,
     }
     emailjs.send(
      'gmail',
      'rhmail',
       templateParams,
      'user_aehcAIMfiaK6Iao11Sqid'
     )
     this.resetForm()
 }
resetForm() {
    this.setState({
      name: '',
      email: '',
      phone: '',
      address: '',
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
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"
              />
            </FormGroup>
            <FormGroup controlId="formPhone">
              <Label className="text-muted">Phone</Label>
              <Input
                type="text"
                name="phone"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'phone')}
                placeholder="Phone"
              />
            </FormGroup>
            <FormGroup controlId="formBasicEmail">
              <Label className="text-muted">Email address</Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Enter email"
              />
            </FormGroup>
            <FormGroup controlId="formBasicSubject">
              <Label className="text-muted">Address</Label>
              <Input
                type="text"
                name="address"
                className="text-primary"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, 'address')}
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
export default ContactPage