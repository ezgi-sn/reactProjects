import './App.css';
import Contact from './Contact';
import React, { Component } from 'react'
class App extends Component {
  constructor(props){
    super(props);
    this.addContact=this.addContact.bind(this);
  }
  state={
    contacts:[
      {name:"Ezgi",
    phone:"05344444444"},
    {name:"Aysu",
    phone:"05355555555"},
    {name:"Bensu",
    phone:"05366666"}  
  ]
  }
  addContact(contact){
    const {contacts}=this.state;
    contacts.push(contact);
    this.setState({
      contacts:contacts
    });
  }
  render(){
  return (
    <div className="App">
      <Contact contacts={this.state.contacts} addContact={this.addContact}/>
    </div>
  );
}
}

export default App;
