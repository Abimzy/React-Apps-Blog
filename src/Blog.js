//Bring in React and Component instance from react
import React, { Component } from 'react';
import Comment from './Comments.js'


class Post extends Component {
    render(){
        let comments = this.props.comments.map((comment, index) => (
            <Comment message={comment} key={index} />
        ))
      return (
    <div>
        <div className='post-page'>
          <h1>{this.props.title}</h1>
          <h2>By {this.props.author}</h2>
        </div>
        <div>
          <p>{this.props.body}</p>
        </div>
        <div>
            <h3>Comments:</h3>
            {comments}
        </div>
    </div>
      )
    }
  }
  export default Post

