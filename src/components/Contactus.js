import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
// import Layout from '../components/layout' need validators
import { Button, Form, FormGroup, Label, Input  } from 'reactstrap'

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
  }
handleSubmit(e) {
    e.preventDefault()
    const { name, email } = this.state
    let templateParams = {
      from_name: 'Renewal-Homes',
      name: name,
      message_html: email,
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
          <h1 className="p-heading1">Get in Touch</h1>
          <Form onSubmit={this.handleSubmit.bind(this)}>
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
            <Button variant="primary" color="primary" type="submit">
              Submit
            </Button>
          </Form>
          </div>
        {/* </Layout> */}
      </>
    )
  }
}
export default ContactForm