import React from 'react';

import Nav from './Nav';
import store from '../store';


export default React .createClass({
  getIntitialState(){
    return{
      session:store.session.toJSON()
    }
  },
  componentWillMount(){
    store.session.on('change',()=>{
      this.setState({session:store.session.toJSON()})
    });
  },
  render(){
    return(
      <div className="register">
        <Nav/>
        <form>
            <input className="username" type="text" placeholder="UserName"/>
            <input className="email" type="email"  placeholder="Email"/>
            <input className="password" type="password"  placeholder="password"/>
            <input className="confirmPassword" type="password"  placeholder="Confirm Password"/>
            <input type="submit" onClick={this.handleSubmit} value="LOGIN"/>
        </form>
      </div>
    )
  },
  handleSubmit(e){
    e.preventDefault();
    const userName=document.querySelector('.username').value;
    const email=document.querySelector('.email').value;
    const password=document.querySelector('.password').value;
    const confirmPassword=document.querySelector('.confirmPassword').value;
    if(store.session.validatePassword(password,confirmPassword)){
      store.session.userRegister(userName,email,password);
    }else{
      console.log('passwords do not match');
    }
  }
});
