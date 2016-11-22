import React from 'react';
import {hashHistory} from 'react-router';

import VotesContainer from '../components/containers/VotesContainer';

export default React.createClass({
  render(){
let header=(
<header>
  <div className="fotorama">
      <img src="../assets/images/heroHome.jpeg"/>
      <img src="../assets/images/heroLogin.jpeg"/>
      <img src="../assets/images/heroRegister.jpeg"/>
      <img src="../asses/images/heroSearch.jpeg"/>
  </div>
    <h1>BRING THE BANDS</h1>
</header>
);

    return(
    <div className="hero">
      {header}
    </div>
    );
  }
});
