import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import CommentApp from './CommentApp'

// class LikeButton extends Component {
//   constructor() {
//     super()
//     this.state = { isLiked: false }
//   }
//   handleClickOnLikeButton() {
//     this.setState({
//       isLiked: !this.state.isLiked
//     })
//   }
//   render(){
//     return (
//       <button onClick={this.handleClickOnLikeButton.bind(this)}>
//         {this.state.isLiked ? '取消' : '点赞'}
//       </button>
//     )
//   }
  
// }
ReactDOM.render(<CommentApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
