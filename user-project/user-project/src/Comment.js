import React from 'react'

const Comment = ({name,comment,stars,avatar}) => {
   // const {name,comment,stars}=props; it is also an usage
  return (
    <div className="comment">
    <a className="avatar">
      <img src={avatar}/>
    </a>
    <div className="content">
      <a className="author">{name}</a>
      <div className="metadata">
        <div className="date">2 days ago</div>
        <div className="rating">
          <i className="star icon"></i>
          {stars}
        </div>
      </div>
      <div className="text">
        {comment}
      </div>
    </div>
  </div>
  )
}
export default Comment
