import React from 'react';
import ReactDom from 'react-dom';
import router from './router';
import $ from 'jquery';
import config from './config';

let container=document.getElementById('container');

$(document).ajaxSend((evt,xhr,opts)=>{
  if(opts.url.indexOf('spotify')===-1){
    console.log('interception!');

    xhr.setRequestHeader('application-id',config.appId);
    xhr.setRequestHeader('secret-key',config.secret);
    xhr.setRequestHeader('application-type','REST');
  if(window.localStorage.getItem('user-token')){
    xhr.setRequestHeader('user-token',window.localStorage.getItem('user-token'));
    }
  }
});
//query requests in data.
//one time auth request to get access token and store it in session to send when ajax request is sent off
//
ReactDom.render(router,container);
