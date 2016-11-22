import React from 'react';
import{hashHistory} from 'react-router';
import store from '../store';
export default React.createClass({
  render(){
    return(
    <div className="search-bar">
      <form onSubmit={this.handleSubmit} className="search-form">
        <input ref="searchTerm" id="search" type="text" placeholder="Search" className="search"/>
        <i onClick={this.handleSubmit} className="fa fa-search" aria-hidden="true"></i>
      </form>
    </div>
    );
  },
  handleSubmit(e){
    e.preventDefault();
    console.log('clicked');
    let artist=this.refs.searchTerm.value;
    store.bands.getBands(artist);
    hashHistory.push('search');
    this.reset();
  }
})
