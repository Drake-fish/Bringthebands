import React from 'react';

import store from '../../store';

import VotedBandList from '../VotedBandList';
import Header from '../header';
import Nav from '../Nav';

export default React.createClass({
  getInitialState(){
    return{
      session:store.session.toJSON(),
      votedBands:store.votedBands.toJSON()
    }
  },
  componentWillMount(){
    store.votedBands.fetch();
  },
  componentDidMount(){
    store.votedBands.fetch();
    store.votedBands.on('change update',()=>{
      this.setState({votedBands:store.votedBands.toJSON()})
    });
  },
  render(){
    let welcome=(
      <div>
      </div>
    );
if(window.localStorage.getItem('name')){
  welcome=(
    <h2>Welcome Back {window.localStorage.getItem('name')}</h2>
  );
}
    return(
  <div className="voted-bands-container">
    {welcome}
    <h3 className="subheader">Bands That Have been Voted </h3>
    <VotedBandList votedArtists={this.state.votedBands}/>

  </div>
  );
}
});
