import React from 'react';
import store from '../store';
export default React.createClass({
  render(){
    let url= this.props.bands.images[0];
    console.log(url);
    if(url ===undefined){
      return(
      <li>
      <img src='http://x104fm.com/site/wp-content/uploads/2015/03/missing-newsfirst.jpg'/>
      <span>{this.props.bands.name}</span>
      <input type="button" value="vote!"/>
      </li>
    );
    }else{
      return (
        <li>
      <img src={this.props.bands.images[0].url}/>
      <span>{this.props.bands.name}</span>
      <input type="button" value="vote!" onClick={this.handleClick}/>
      </li>

    );
    }
  },
  handleClick(){
    const name=this.props.bands.name;
    const picture=this.props.bands.images[0].url;
    const votes=1;
    store.bands.addVotes({name,picture,votes});
  }
});
