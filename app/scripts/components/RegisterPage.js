import React from 'react';
import {Link} from 'react-router';


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
        <header className="register-header">
          <h1>BRING THE BANDS</h1>
        </header>
        <h3 className="register-subheader">Create a Bring the bands account</h3>
          <form>
              <input ref="username" className="username" type="text" placeholder="UserName"/>
              <input ref="email" className="email" type="email"  placeholder="Email"/>
              <input ref="password" className="password" type="password"  placeholder="password"/>
              <input ref="confirmPassword" className="confirmPassword" type="password"  placeholder="Confirm Password"/>
              <input className="register-button" type="submit" onClick={this.handleSubmit} value="LOGIN"/>
          </form>
          <span> Already have an account? <Link className="register-link" to="/login">Login</Link></span>
      </div>
    )
  },
  handleSubmit(e){
    e.preventDefault();
    const userName=this.refs.username.value;
    const email=this.refs.email.value;
    const password=this.refs.password.value;
    const confirmPassword=this.refs.confirmPassword.value;
    if(store.session.validatePassword(password,confirmPassword)){
      store.session.userRegister(userName,email,password);
    }else{
      console.log('passwords do not match');
    }
  }
});
