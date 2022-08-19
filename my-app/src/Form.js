import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props){
        super(props);
        this.addButton=this.addButton.bind(this);
    }
    addButton(){
        this.props.addNew();
        console.log("Hi");
    }
    
  render() {
  
    return (
      <div>
        <button onClick={this.addButton}>Ekle</button>
      </div>
    )
  }
}
