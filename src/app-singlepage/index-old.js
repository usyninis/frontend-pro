import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { Router, Route, Link, browserHistory } from 'react-router';

import App from './scripts/pages/App';
import Users from './scripts/pages/Users';
import NoMatch from './scripts/pages/Error404';

import './less/base.less';

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
