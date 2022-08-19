import React, { Component } from 'react'
import './List.css'
class List extends Component {
  state={
    filterText:''
  }
  onChange = (e)=>{
    this.setState({
      filterText:e.target.value
    })
  }
  render() {  
    const filteredText=this.props.contacts.filter(
      contact=> {
        return contact.name.toLowerCase().indexOf(
          this.state.filterText.toLowerCase()
        ) !==-1
      }
    )

    return (
      <div className='listArea'>
        <input name="filter" id="filter"  onChange={this.onChange} placeholder='Filter by Name or Surname'/>
      <ul className='listElements'>
        {
         filteredText.map(contact=>
          <li key={contact.phone}>
        <span className='name'>{contact.name}</span>
        <span className='phone'>{contact.phone}</span>
        <span className='clearfix'></span>
        </li>
          ) 
        }
        
        
      </ul>
      </div>
    )
  }
}
export default List

