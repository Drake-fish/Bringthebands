import React from 'react';
import {Link} from 'react-router';
import store from '../store';


export default React.createClass({

  render(){
    let nav;

  if(!window.localStorage.getItem('user-token')){
    nav=(
      <nav className="logged-out-nav">
        <Link to= "login">Log In</Link>
        <Link to= "register">Register</Link>
      </nav>
    )
  }else{
    nav=(
      <nav className="logged-in-nav">
        <Link to="search" className="search-nav">SEARCH BANDS</Link>
        <Link to="bands" className="voted-bands-nav">SEE WHOS COMING</Link>
        <input type="button" className="logout-button" onClick={this.handleLogout} value="LOGOUT"/>
      </nav>
    )
  }
  return(
    <div>
      {nav}
      {this.props.children}
    </div>
  );
},
handleLogout(e){
  e.preventDefault();
  store.session.userLogout();
}
});
