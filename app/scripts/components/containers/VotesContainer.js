import React from 'react';

import store from '../../store';

import VotedBandList from '../VotedBandList';

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
    store.session.on('change update', ()=>{
      this.setState({votedBands:store.votedBands.toJSON()})
    });
    store.votedBands.fetch();
    store.votedBands.on('change update',()=>{
      this.setState({votedBands:store.votedBands.toJSON()})
    });
  },
  render(){

    return(
    <div className="voted-bands-container">
      <h3>Bands That Have been Voted </h3>
      <VotedBandList votedArtists={this.state.votedBands}/>
    </div>
  );
}
});
