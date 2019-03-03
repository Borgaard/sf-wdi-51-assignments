import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home.js';
import API from '../components/API.js';
import Profile from '../components/Profile.js';
import DestinationContainer from '../containers/DestinationContainer.js';

export default (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route path='/api' component={ API } />
    <Route path='/profile' component={ Profile } />
    <Route path='/destinations' component={ DestinationContainer } />
  </Switch>
);