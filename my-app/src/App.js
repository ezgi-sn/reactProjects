import React, { Component } from 'react';
import './App.css';
import MidLayer from './MidLayer.js'
const myarray=[{
  id:1,
  desc:"react"
},
{
  id:2,
  title:"super",
  desc:"react native"
}
]
class App extends Component {
  state={
    isim:"ezzz"
  }
  addNew(){
    console.log("did");
    myarray.push({id:4, title:"coll"})
}
changeName(){
  this.setState({
    isim:"quee"
  })
}
  render(){
    
    return (
      <div>
        <MidLayer myarray={myarray} addNew={this.addNew}/>
      <h1>{this.state.isim}</h1>
      <button onClick={this.changeName.bind(this)} >Değiştir</button>
      </div>
    );
  }
}

export default App;
