import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import ReactDOM from 'react-dom'
import App from './components/App.jsx'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App} />
  </Router>
), document.getElementById('app'))
