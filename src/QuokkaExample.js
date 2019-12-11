/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const div = document.createElement('div');
ReactDOM.render(<App />, div);
// eslint-disable-next-line no-unused-expressions
div.getElementsByClassName('App')[0].innerHTML; //?
