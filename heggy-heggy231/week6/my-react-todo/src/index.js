import React from 'react';
// get the react router 
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  // wrap the app inside browser router
  <BrowserRouter>
    <App/>
  </BrowserRouter>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
