import React, { Component } from 'react'
import Form from './Form'
import List from './List'
class Contact extends Component {
  render() {
    
    return (
      <div>
        <List contacts={this.props.contacts}/>
        <Form addContact={this.props.addContact}/>
      </div>
    )
  }
}

export default Contact
