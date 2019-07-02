import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import { createBrowserHistory } from "history";

import CommentApp from '../containers/CommentApp'
import Hello from '../containers/Hello'

const history = createBrowserHistory()

export default class RouteConfig extends Component {
  render() {
    return (
      <HashRouter history={history}>
        <Switch>
          <Route path='/' exact component={CommentApp}/>
          <Route path='/Hello' exact component={Hello}/>
          <Redirect to="/"/>
        </Switch>
      </HashRouter>  
    )
  }
}