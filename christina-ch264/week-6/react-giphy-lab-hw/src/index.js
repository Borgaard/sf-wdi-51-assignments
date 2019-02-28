// Developer TODO: Load in App component and render to the DOM
import React from 'react';
import ReactDOM from 'react-dom';
// import react route
// import {
//     BrowserRouter as Router
// } from 'react-router-dom';
import './index.css';
import AppHome from './AppHome';



ReactDOM.render(
    // send all interactions in app through router
    // <Router>
        <AppHome />,
    // </Router>
    document.getElementById('root')
    

);
