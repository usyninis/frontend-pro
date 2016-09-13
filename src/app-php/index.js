import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import InputTest from './InputTest';

var ServerComponents = {
  InputTest
};

import './style.less';

console.log('script');

$(function() {
  $('div[data-react-component]').each(function() {
    let $div = $(this);
    let componentName = $div.data('react-component');
    if (ServerComponents[componentName]) {
      ReactDOM.render(React.createElement(ServerComponents[componentName], JSON.parse($div.text())), this);
      $div.attr('hidden', false);
    } else {
      console.error('error component ' + componentName);
    }
  });
});
