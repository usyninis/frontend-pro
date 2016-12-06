import React from 'react';
import ReactDOM from 'react-dom';

import './style.less';


var MyDiv = React.createClass({
  render() {
    return (
      <div>
        MyDivs
      </div>
    );
  }
});


ReactDOM.render((
  <MyDiv />
), document.getElementById('root'));
