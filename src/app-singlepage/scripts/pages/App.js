import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

var Aa = (props) => {
  return (
    <a href="#">{props.text}</a>
  );
};

export default React.createClass({
  render() {
    //console.log(Route);
    return (
      <div>
        <h1>Hellosdasd!!!</h1>
        <Aa text='ahaha' />
        <Link to='/' activeClassName='active'>
          <i className='mi material-icons mi-48'>favorite_border</i>
        </Link>
        <Link to='/users' activeClassName='active'>
          <i className='mi material-icons mi-48'>face</i>
        </Link>
        <i className='mi material-icons mi-48'>flight_takeoff</i>
        <i className='mi material-icons mi-48'>call_made</i>
        <i className='mi material-icons mi-48'>account_circle</i>
        <i className='mi material-icons mi-48'>call_made</i>
      </div>
    );
  }
});