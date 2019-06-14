import React, { Component } from 'react'
// import wrapWithLoadData from '../wrapWithLoadData'
import { connect } from 'react-redux'
import { addComment } from '../reducers/comments'
import PropTypes from 'prop-types'
import CommentInput from '../components/CommentInput'

class CommentInputContainer  extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    data: PropTypes.any,
  }
  state = {
    username: '',
  }
  componentWillMount() {
    this._loadUsername()
  }
  _loadUsername() {
    const username = localStorage.getItem('username')
    if(username){
      this.setState({
        username
      })
    }
  }
  _saveUsername(username) {
    localStorage.setItem('username', username)
  }
  
  handleSubmitComment(comment) {
    if(!comment) return 
    if(!comment.username) return alert('请输入用户名')
    if(!comment.content) return alert('请输入评论内容')
    let { comments } = this.props
    const newComments = [...comments, comment]
    localStorage.setItem('comments', JSON.stringify(newComments))
    if(this.props.onSubmit){
      this.props.onSubmit(comment)
    }
  }


  
  render() {
    return (
      <CommentInput
        username={this.state.username}
        onUserNameInputBlur={this._saveUsername.bind(this)}
        onSubmit={this.handleSubmitComment.bind(this)} />
    )
  }
}
// CommentInput = wrapWithLoadData(CommentInput, 'username')

const mapStateToProps = (state, ownProps) => {
  return {
    comments: state.comments
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (comment) => {
      dispatch(addComment(comment))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CommentInputContainer)