import React from 'react';

import store from '../store';

export default React.createClass({


  render(){
    console.log(this.props);
    if(this.props.band.images<1){
      return(
        <li className="search-item">
          <img src="https://ugotalksalot.files.wordpress.com/2016/06/no-thumb.jpg"/>
          <span className="band-name">{this.props.band.name}</span>
          <input className="vote-button" onClick={this.handleClick} type="button" value="vote"/>
        </li>
      );
    }else{
    return(
      <li className="search-item">
        <img src={this.props.band.images[0].url}/>
        <span className="band-name">{this.props.band.name}</span>
        <a className="vote-button" onClick={this.handleClick}>Vote</a>
      </li>
    );
  }
  },
  handleClick(){
    let name=this.props.band.name;
    let photo=this.props.band.images[0].url;
    let votes=1;
    store.votedBands.addVotes({name:name,photo:photo});


}
});
