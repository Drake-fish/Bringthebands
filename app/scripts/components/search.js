import React from 'react';

import SearchResults from './SearchResults';
import store from '../store';
export default React.createClass({
  getIntitialState(){
    return{
      session:store.session.toJSON(),
      bands:store.bands.toJSON()
    }
  },
  componentWillMount(){
    store.session.on('change',()=>{
      this.setState({session:store.session.toJSON()})
    });
    store.bands.on('change',()=>{
      this.setState({bands:store.bands.toJSON()})
    });
  },
  render(){
    return(
      <div className="search">
        <form  onSubmit={this.handleSubmit}>
          <input id="search" type="text" placeholder="Search" className="search"/>
          <input type="submit" value="search"/>
        </form>
      </div>

    );
  },
  handleSubmit(e){
    e.preventDefault();

    let artist=document.getElementById('search').value;
    store.bands.getBands(artist);
  }
});
