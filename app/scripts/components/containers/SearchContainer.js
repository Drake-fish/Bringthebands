import React from 'react';


import store from '../../store';
import SearchList from '../searchList';

export default React.createClass({
  getInitialState(){
    return {
      bands:[{artists:{items:[]}}],
    }
  },
  componentWillMount(){
    store.votedBands.fetch();
  },
  componentDidMount(){
    store.votedBands.fetch();
    store.bands.on('change update',()=>{
      this.setState({bands:store.bands.toJSON()});

    });
  },
  render(){
    let bands=this.state.bands[0].artists.items;

    return(
      <div className="search-container">
          <SearchList bands={bands}/>
        </div>
    );
  }
});
