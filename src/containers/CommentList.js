import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { initComments, deleteComment } from '../reducers/comments'
import CommentList from '../components/CommentList'


class CommentListContainer extends Component {
  static propTypes = {
    comments: PropTypes.array,
    initComments: PropTypes.func,
    onDeleteComment: PropTypes.func
  }
  static defaultProps = {
    comments: []
  }
  componentWillMount() {
    this._loadComments()
  }
  _loadComments() {
    let comments = localStorage.getItem('comments')
    comments = comments ? JSON.parse(comments) : []
    this.props.initComments(comments)
  }

  handleDeleteComment(index) {
    const { comments } = this.props
    const newComents = [
      ...comments.slice(0, index),
      ...comments.slice(index+1)
    ]
    localStorage.setItem('comments', JSON.stringify(newComents))
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index)
    }
  }
  render() {
    return (
      <CommentList
      comments={this.props.comments}
      onDeleteComment={this.handleDeleteComment.bind(this)} />
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    comments: state.comments
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initComments: (comments) => {
      dispatch(initComments(comments))
    },
    onDeleteComments: (commentIndex) => {
      dispatch(deleteComment(commentIndex))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CommentListContainer)