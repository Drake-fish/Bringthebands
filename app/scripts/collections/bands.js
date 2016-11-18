import Backbone from 'backbone';
import Band from '../models/band';
import $ from 'jquery';

import config from '../config';


export default Backbone.Collection.extend({
  model:Band,
  getBands(artist){
    $.ajax({
      url:'https://api.spotify.com/v1/search',
      data:{
        q:artist,
        type:'artist'
      },
      success:(response)=>{
        // console.log('this reference', this);
        // console.log('search response', response);
        this.add(response);
      }
    });
  },
  addVotes({name,picture,votes}){
    this.create(
      {name, picture, votes},
      {headers: {
        'application-id':config.appId,
        'secret-key':config.secret,
        'Content-Type':'application/json',
        'application-type': 'REST'
      },
      url:'https://api.backendless.com/v1/data/bands'
    });
  }
});
