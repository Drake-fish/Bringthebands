import React from 'react';

import VotesContainer from '../components/containers/VotesContainer';


export default React.createClass({
  render(){
    return(
      <div className="home">
        <header className="home-header">
          <h1>BRING THE BANDS</h1>
        </header>
            <h2>Welcome to Bring the Bands</h2>
            <h3>We strive to bring the biggest bands to our venue, but need your help! Sign up and vote for your favorite bands!</h3>
          <VotesContainer/>
      </div>

    );
  }
});
