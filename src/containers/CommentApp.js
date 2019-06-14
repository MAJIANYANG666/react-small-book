import React, { Component } from 'react'
import CommentInput from '../containers/CommentInput'
import CommentList from '../containers/CommentList'
// import wrapWithLoadData from './wrapWithLoadData'

class CommentApp extends Component {
  
  render() {
    return (
      <div className="wrapper">
        <CommentInput  />
        <CommentList />
      </div>
    )
  }
}
// CommentApp = wrapWithLoadData(CommentApp, 'comments')

export default CommentApp