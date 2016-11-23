import React from 'react';
import {Link} from 'react-router';

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
        <header className="login-header">
          <h1>BRING THE BANDS</h1>
        </header>
            <h3> Welcome! Sign in and promote your favorite band!</h3>
            <form>
                <input ref="email" className="email" type="email"  placeholder="Email"/>
                <input ref="password" className="password" type="password"  placeholder="password"/>
                <input className="login-button" type="submit" onClick={this.handleSubmit} value="LOGIN"/>
            </form>
            <span> Dont have an account?<Link className="register-link" to="register">Create an account</Link></span>
      </div>
    )
  },
  handleSubmit(e){
    e.preventDefault();
    const email=this.refs.email.value;
    const password=this.refs.password.value;
    store.session.userLogin(email,password);
  }
});
