import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// import CommentApp from './containers/CommentApp'
import commentsReducer from './reducers/comments'
import route from './router/index.js'
import './index.css'

const store = createStore(commentsReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const render = (Component) => ReactDOM.render(
  <Provider store={store}>
    <Component />
  </Provider>,
  document.getElementById('root')
);

render(route)