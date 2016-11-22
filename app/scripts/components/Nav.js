import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';


import SearchField from './searchField';
import store from '../store';


export default React.createClass({

  render(){
    let nav;

  if(!window.localStorage.getItem('user-token')){
    nav=(
      <nav role="navigation">
      <div id="menuToggle">

    <input type="checkbox"/>
    <span></span>
    <span></span>
    <span></span>
    <ul id="menu">
    <Link onClick={this.handleClick} to="/">Home</Link>
    <Link onClick={this.handleClick} to= "login">Log In</Link>
    <Link onClick={this.handleClick} to= "register">Register</Link>
    </ul>
  </div>
</nav>
    )
  }else{
    nav=(
    <div>
      <nav role="navigation">
      <div id="menuToggle">

    <input type="checkbox"/>
    <span></span>
    <span></span>
    <span></span>
    <ul id="menu">
      <Link onClick={this.handleClick} to="search"><li>Search</li></Link>
      <Link onClick={this.handleClick} to="bands"><li>Voted Bands</li></Link>
      <Link onClick={this.handleLogout} to="/"><li>Logout</li></Link>
    </ul>
  </div>
</nav>
<SearchField/>
</div>
    )
  }
  return(
    <div>
      {nav}
    </div>
  );
},
handleClick(){
  $('input[type=checkbox]').trigger('click');
},
handleLogout(e){
  e.preventDefault();
  store.session.userLogout();
}
});
