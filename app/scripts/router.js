
import React from 'react';
import {Router, Route, hashHistory,IndexRoute} from 'react-router';


import config from './config';
import App from './components/containers/app';
import $ from 'jquery';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import SearchContainer from './components/containers/SearchContainer';
import VotesContainer from './components/containers/VotesContainer';
import Home from './components/home';


const router=(

<Router history= {hashHistory}>
  <Route path='/' component={App}>
    <IndexRoute component={Home}/>
    <Route path='/login' component={LoginPage}/>
    <Route path='/register' component={RegisterPage}/>
    <Route path='/search' component={SearchContainer}/>
    <Route path='/bands' component={VotesContainer}/>
  </Route>
</Router>

);

export default router;
