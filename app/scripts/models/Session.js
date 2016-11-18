import $ from 'jquery';
import Backbone from 'backbone';
import {hashHistory} from 'react-router';

export default Backbone.Model.extend({
  initialize(){
    if(window.localStorage.getItem('user-token')){
      this.set('user-token',window.localStorage.getItem('user-token'));

    }
  },
  defaults:{
    'user-token':''
  },

  validatePassword(password,confirmPassword){
    if(password === confirmPassword)return true;
    return false;
  },
  userRegister(name,email,password){
    $.ajax({
      type:'POST',
      header:{
      'application-type':'REST',
      'application-id': config.appId,
      'secret-key':config.secret
    },
      url:'https://api.backendless.com/v1/users/register',
      contentType:'application/json',
      data:JSON.stringify({
        name,
        email,
        password
      }),
      success:()=>{
        this.userLogin(email,password);
      }
    });
  },
  userLogin(email,password){
    $.ajax({
      type:'POST',
      header:{
      'application-type':'REST',
      'application-id': config.appId,
      'secret-key':config.secret
    },
      url:'https://api.backendless.com/v1/users/login',
      contentType:'application/json',
      data:JSON.stringify({
        login:email,
        password
      }),
      success:(response)=>{
        this.set(response);
        window.localStorage.setItem('user-token',response['user-token']);
        window.localStorage.setItem('name',response['name']);
        hashHistory.push('/search');
      }
    });
  },
  userLogout(){
    $.ajax({
      header:{
      'application-type':'REST',
      'application-id': config.appId,
      'secret-key':config.secret
    },
      url:'https://api.backendless.com/v1/users/logout',
      success:()=>{
        this.clear();
        window.localStorage.clear();
        hashHistory.push('/');
      }
    })
  }
});
