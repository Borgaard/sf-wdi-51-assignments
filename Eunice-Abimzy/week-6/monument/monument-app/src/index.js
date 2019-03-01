import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import Home from './App';
import Blog from './Blog/Blog'
import * as serviceWorker from './serviceWorker';
import {Route, Link, Switch} from 'react-router-dom';


ReactDOM.render(
    <Router>
        <Switch>
         <Route exact path="/" component={ Home } />
         <Route path="/blog" component={ Blog} />
       </Switch>
    </Router>,
document.getElementById('root'));

// ReactDOM.render(<Blog />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
 