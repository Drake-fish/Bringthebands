
import React from 'react';
import {Router, Route, hashHistory} from 'react-router';


import config from './config';
import Nav from './components/Nav';
import $ from 'jquery';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import SearchContainer from './components/containers/SearchContainer';
import VotesContainer from './components/containers/VotesContainer';

$(document).ajaxSend((evt,xhr,opts)=>{
  if(opts.url.indexOf('spotify')===-1){
    console.log('interception!');

    xhr.setRequestHeader('application-id',config.appId);
    xhr.setRequestHeader('secret-key',config.secret);
    xhr.setRequestHeader('application-type','REST');
    xhr.setRequestHeader('user-token',window.localStorage.getItem('user-token'));
  }
});

const router=(

<Router history= {hashHistory}>
  <Route path='/' component={Nav}>
    <Route path='/login' component={LoginPage}/>
    <Route path='/register' component={RegisterPage}/>
    <Route path='/search' component={SearchContainer}/>
    <Route path='/bands' component={VotesContainer}/>
  </Route>
</Router>

);

export default router;
