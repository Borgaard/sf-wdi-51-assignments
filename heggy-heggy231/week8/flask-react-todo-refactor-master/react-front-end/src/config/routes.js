import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import TodosContainer from '../containers/TodosContainer';

export default (
  <Switch>
    <Route exact path='/' component={ Home }/>
    <Route path='/todos' component={ TodosContainer }/>
  </Switch>
)

// Objective is to build the backend API in Flask for this React app. (AKA your own TODO api!)
// Model should include
// body: String,
// priority: Number,
// completed: Boolean