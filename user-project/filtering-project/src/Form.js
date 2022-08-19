import React, { Component } from 'react'
class Form extends Component {
  constructor(){
    super();
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }
  state=
  {
    name:'',
    phone:''
  }
  onChange(e){
    this.setState(
      {
        [e.target.name]:e.target.value
      }
    )
  }
  onSubmit(e){
    e.preventDefault();
    this.props.addContact(
      {
       ...this.state 
      }
    )
    this.setState({
      name:'',
      phone:''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input value={this.state.name} onChange={this.onChange} name="name" id="id" placeholder='Type a name..'/>
          <br />
          <input value={this.state.phone} onChange={this.onChange} name="phone" id="phone" placeholder='Type a number..'/>
          <button>Add to the list</button>
        </form>
      </div>
    )
  }
}

export default Form
