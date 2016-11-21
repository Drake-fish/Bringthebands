import React from 'react';

const App=React.createCLass({
  render:function(){
    return(
      <div id="app">
        {this.props.children}
      </div>
    );
  }
});


export default App;
