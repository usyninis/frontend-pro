import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

export default React.createClass({
  render() {
    //console.log(Route);
    return (
      <div>
        <h1>Users!</h1>
        <Link to='/' activeClassName='active'>
          <i className='mi material-icons mi-48'>favorite_border</i>
        </Link>
        <Link to='/user/1' activeClassName='active'>
          <i className='mi material-icons mi-48'>face</i>
        </Link>
      </div>
    );
  }
});
