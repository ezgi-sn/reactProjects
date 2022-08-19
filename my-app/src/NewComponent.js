import React, { Component } from 'react'
import PropTypes from 'prop-types';
class NewComponent extends Component {
  
  static propTypes=
  {
    newData:PropTypes.shape({
      title:PropTypes.string,
      desc:PropTypes.string
    })
  }
  render() {
    const {title,desc}=this.props.newData;
    return (
      <div>
        <h1>{title}</h1> 
      </div>
    )
  }
}

export default NewComponent;
