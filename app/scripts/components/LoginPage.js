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
      <div className="login">
      <Nav/>
      <form>
          <input className="email" type="email"  placeholder="Email"/>
          <input className="password" type="password"  placeholder="password"/>
          <input type="submit" onClick={this.handleSubmit} value="LOGIN"/>
      </form>
      </div>
    )
  },
  handleSubmit(e){
    e.preventDefault();
    const email=document.querySelector('.email').value;
    const password=document.querySelector('.password').value;
    store.session.userLogin(email,password);
  }
});
