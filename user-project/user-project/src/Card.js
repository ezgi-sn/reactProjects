import React from 'react'
const Card = (props) => {
  return (
    <div className="ui card">
  <div className="content">
    {props.children}
  </div>
  <div className="extra content">
    <span className="left floated like">
      <i className="like icon"></i>
      Like
    </span>
    <span class="right floated star">
      <i class="star icon"></i>
      Favorite
    </span>
  </div>
</div>
  )
}

export default Card;
