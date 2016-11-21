import React from 'react';


import store from '../../store';
import SearchList from '../searchList';

export default React.createClass({
  getInitialState(){
    return {
      bands:[{artists:{items:[]}}]
    }
  },
  componentDidMount(){

    store.bands.on('change update',()=>{
      this.setState({bands:store.bands.toJSON()});

    });
  },
  render(){
    console.log(this.state);
    let bands=this.state.bands[0].artists.items;

    return(
      <div className="search-container">
        <form onSubmit={this.handleSubmit} className="search-form">
          <input id="search" type="text" placeholder="Search" className="search"/>
          <input type="submit" value="search" className="submit-button"/>
        </form>
          <SearchList bands={bands}/>
        </div>
    );
  },

  handleSubmit(e){
    e.preventDefault();
    console.log('clicked');
    let artist=document.getElementById('search').value;
    store.bands.getBands(artist);
  }
});
