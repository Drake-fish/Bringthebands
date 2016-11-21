import React from 'react';

import store from '../store';

export default React.createClass({


  render(){
    if(this.props.band.images<1){
      return(
        <li className="search-item">
          <img src="https://ugotalksalot.files.wordpress.com/2016/06/no-thumb.jpg"/>
          <span className="band-name">{this.props.band.name}</span>
          <input onClick={this.handleClick} type="button" value="vote"/>
        </li>
      );
    }else{
    return(
      <li className="search-item">
        <img src={this.props.band.images[0].url}/>
        <span className="band-name">{this.props.band.name}</span>
        <input onClick={this.handleClick} type="button" value="vote"/>
      </li>
    );
  }
  },
  handleClick(){
      store.bands.addVotes({name:this.props.band.name,photo:this.props.band.images[0].url,votes:1});
  }
});
