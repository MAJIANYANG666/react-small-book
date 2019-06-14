import React, { Component } from 'react'
// import wrapWithLoadData from '../wrapWithLoadData'
import PropTypes from 'prop-types'

class CommentInput extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    username: PropTypes.any,
    onUserNameInputBlur: PropTypes.func
  }
  state = {
    username: this.props.username || '',
    content: ''
  }
  // componentWillMount() {
  //   this._loadUsername()
  // }
  componentDidMount() {
    this.textarea.focus()
  }
  // _saveUsername(username) {
  //   localStorage.setItem('username', username)
  // }
  // _loadUsername() {
  //   const username = localStorage.getItem('username')
  //   if(username){
  //     this.setState({
  //       username
  //     })
  //   }
  // }
  handleUsernameChange (event) {
    this.setState({
      username: event.target.value
    })
  }
  handleContentChange (event) {
    this.setState({
      content: event.target.value
    })
  }
  handleSubmit () {
    if(this.props.onSubmit){
      let { username, content } = this.state
      this.props.onSubmit({ 
        username,
        content,
        createdTime: +new Date()
      })
    }
    this.setState({
      content: ''
    })
  }
  handleUsernameBlur(event) {
    if( this.props.onUserNameInputBlur) {
      this.props.onUserNameInputBlur(event.target.value)
    }
    
  }
  
  render() {
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">用户名：</span>
          <div className="comment-field-input">
            <input onBlur={this.handleUsernameBlur.bind(this)} value={this.state.username} onChange={this.handleUsernameChange.bind(this)}/>
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">评论内容：</span>
          <div className="comment-field-input">
            <textarea ref={(textarea)=>this.textarea = textarea} value={this.state.content} onChange={this.handleContentChange.bind(this)}/> 
          </div>
        </div>
        <div className="comment-field-button">
          <button onClick={this.handleSubmit.bind(this)}>
            发布
          </button>
        </div>
      </div>
    )
  }
}
// CommentInput = wrapWithLoadData(CommentInput, 'username')
export default CommentInput