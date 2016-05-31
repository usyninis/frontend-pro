import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { Router, Route, Link, browserHistory } from 'react-router';

import App from './pages/App';
import Users from './pages/Users';
var NoMatch = React.createClass({
  render() {
    return (
      <div>
        not found
      </div>
    );
  }
});

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App} />
    <Route path='/users' component={Users} />
    <Route path='*' component={NoMatch} />
  </Router>
), document.getElementById('root'));
