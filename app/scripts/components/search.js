import React from 'react';

import SearchResults from './SearchResults';

export default React.createClass({
  render(){
    return(
      <div className="search">
        <form>
          <input type="test" placeholder="Search" className="search"/>
          <input type="submit" value="search"/>
        </form>
        {SearchResults}
      </div>

    );
  }
});
