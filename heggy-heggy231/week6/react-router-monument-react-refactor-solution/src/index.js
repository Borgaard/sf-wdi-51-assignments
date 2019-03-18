import React from 'react';
import ReactDOM from 'react-dom';
// import react router importing browserRouter 
// https://git.generalassemb.ly/sf-wdi-51/react-router-intro
import {
  BrowserRouter as Router
} from "react-router-dom"
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(

  // wrap App inside ofthe dom
  <Router>
    <App />
  </Router>, 
  document.getElementById('root')
);

registerServiceWorker();
