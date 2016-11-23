import React from 'react';



import Nav from '../Nav';
import VotesContainer from '../containers/VotesContainer';
export default React.createClass({


  render(){
    return(
      <div id="app">
          <Nav/>
            {this.props.children}
      </div>
    );
  }
});
