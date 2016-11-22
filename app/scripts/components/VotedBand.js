import React from 'react';
import store from '../store';
export default React.createClass({
  render(){
    let votebutton=(
      <input className="add-vote" type="button" value="Add Vote" onClick={this.handleClick}/>
    );
    if(!window.localStorage.getItem('user-token')){
      votebutton=(
        <div>
        </div>
      );
    }
    return(
      <li>
        <img src={this.props.band.photo}/>
        <span>{this.props.band.name}</span>
        <span>Votes:{this.props.band.votes}</span>
          {votebutton}
      </li>
    );
  },
  handleClick(){
    store.votedBands.addVotes({name:this.props.band.name,photo:this.props.band.photo});
    console.log('clicked');
  }
});
