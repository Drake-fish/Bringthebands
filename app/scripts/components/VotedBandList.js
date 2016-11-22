import React from 'react';

import VotedBand from './VotedBand';

export default React.createClass({
  render(){
    console.log(this.props);

    let bands=this.props.votedArtists.map((band,i,arr)=>{
      return(
        <VotedBand key={i} band={band}/>
      )
    });
    return(
      <ul>
        {bands}
      </ul>
    );
  }
});
