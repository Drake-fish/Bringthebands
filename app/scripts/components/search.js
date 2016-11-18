import React from 'react';

import SearchResults from './SearchResults';
import store from '../store';
export default React.createClass({
  getInitialState(){
    return{
      session:store.session.toJSON(),
      bands:[{artists:{items:[]}}]
    }
  },
  componentDidMount(){
    store.session.on('change',()=>{
      this.setState({session:store.session.toJSON()})
    });
    store.bands.on('update change',()=>{
      this.setState({bands:store.bands.toJSON()})
      console.log('collection update event', this.state.bands);
      console.log('store reference', store.bands.toJSON());
    });
  },
  render(){
    return(
      <div className="search">
        <form  onSubmit={this.handleSubmit}>
          <input id="search" type="text" placeholder="Search" className="search"/>
          <input type="submit" value="search"/>
        </form>
        <SearchResults bands={this.state.bands[0].artists.items}/>
      </div>

    );
  },
  handleSubmit(e){
    e.preventDefault();
    let artist=document.getElementById('search').value;
    store.bands.getBands(artist);
    console.log(this.state.bands);
  }
});
