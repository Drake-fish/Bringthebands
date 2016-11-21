import React from 'react';

export default React.createClass({
  render(){
    console.log(this.props);
    return(
      <li>
        <img src={this.props.band.photo}/>
        <span>{this.props.band.name}</span>
        <span>Votes:{this.props.band.votes}</span>
        <input type="button" value="Add Vote" onClick={this.handleClick}/>
      </li>
    );
  },
  handleClick(){
    console.log('clicked');
  }
});
