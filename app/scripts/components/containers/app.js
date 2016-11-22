import React from 'react';



import Nav from '../Nav';
import VotesContainer from '../containers/VotesContainer';
import Header from '../header';
export default React.createClass({


  render(){
    return(
      <div id="app">
          <Header/>
          <Nav/>
            {this.props.children}
      </div>
    );
  }
});
