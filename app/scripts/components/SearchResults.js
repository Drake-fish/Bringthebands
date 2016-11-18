import React from 'react';

import SearchItem from './searchItem';

export default React.createClass({
  render(){
    console.log('search Results', this.props);
    let allBands=this.props.bands.map((band,i,arr)=>{
      return (
        <SearchItem key={i} bands={band}/>

    );

    });
    return(
      <ul>
      {allBands}
      </ul>
    );
  }
});
