import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Monument from './App';
// import Blog from './Blog/Blog';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Monument />, document.getElementById('root'));

// ReactDOM.render(<Blog />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
 