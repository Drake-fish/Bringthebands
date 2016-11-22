import $ from 'jquery';
import Backbone from 'backbone';
import {hashHistory} from 'react-router';
import config from '../config';


export default Backbone.Model.extend({
  initialize(){
    if(window.localStorage.getItem('user-token')){
      this.set('user-token',window.localStorage.getItem('user-token'));

    }
  },
  idAttribute:'objectId',
  defaults:{
    userName:'',
    email:'',
    'user-token':'',
    votedArtists:[]
  },

  validatePassword(password,confirmPassword){
    if(password === confirmPassword)return true;
    return false;
  },
  userRegister(name,email,password){
    $.ajax({
      type:'POST',
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
        hashHistory.push('bands');
      }
    });
  },
  userLogout(userToken){
    $.ajax({
      contentType:'application/json',
      url:'https://api.backendless.com/v1/users/logout',
      success:()=>{
        this.clear();
        window.localStorage.clear();
        hashHistory.push('/');
      }
    });
  }
});
