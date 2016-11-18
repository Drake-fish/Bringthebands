
import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import config from './config';
import $ from 'jquery';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Search from './components/search';


$(document).ajaxSend((e,xhr,opts)=>{
  console.log('interception!');
  xhr.setRequestHeader('application-type','REST');
  xhr.setRequestHeader('application-id', config.appId);
  xhr.setRequestHeader('secret-key',config.secret);
});
export default(

<Router history= {hashHistory}>
  <Route path='/' component={LoginPage}/>
  <Route path='/sign-in' component={RegisterPage}/>
  <Route path='/search' component={Search}/>
</Router>

);
