import React, { Component } from 'react'
import PropTypes from 'prop-types';
import NewComponent from './NewComponent'
import Form from './Form.js'
class MidLayer extends Component {
  static propTypes=
  {
    myarray:PropTypes.array
  }
  static defaultProps =
  {
    title:"ez"
  }
  render() {
    const elements=this.props.myarray.map(myarray =>
      <NewComponent key={myarray.id} newData={myarray}/>
  )
    return (
      <div>
        {
            elements
            
        }
        {this.props.title}
        <Form addNew={this.props.addNew}/>
      </div>
    )
  }
}

export default MidLayer