import React from 'react';
import {Link} from 'react-router';



const Nav=React.createClass({
  render(){
    let Nav=(
    <ul>
      <Link to="sign-in">Sign-in</Link>
      <Link to="/">Login</Link>
    </ul>
    );
    if(window.localStorage.name){
      Nav=(
      <ul>
        <Link to="search">Search</Link>
        <Link to="votes">Votes</Link>
      </ul>
      );
    }
    return(
  <nav className="nav">
      {Nav}
  </nav>
);
  }
});

export default Nav;
