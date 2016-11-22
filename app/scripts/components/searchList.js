import React from 'react';

import SearchItem from './SearchItem';

export default React.createClass({
  render(){

    let bands;
    if(this.props.bands.length<1){
    bands= <li className="empty-Search">Search For your favorite bands</li>;
    }else{
      bands=this.props.bands.map((band,i,arr)=>{
        return <SearchItem key={band.id} band={band}/>;
      });
    }


    return(
      <div className="search-results">
        <h3>Search Results</h3>
        <ul className="searchList">
          {bands}
        </ul>

      </div>
    );
  }
});
