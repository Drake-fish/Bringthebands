
import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import config from './config';
import $ from 'jquery';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Search from './components/search';


export default(

<Router history= {hashHistory}>
  <Route path='/' component={LoginPage}/>
  <Route path='/sign-in' component={RegisterPage}/>
  <Route path='/search' component={Search}/>
</Router>

);
