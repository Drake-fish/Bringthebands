import Backbone from 'backbone';
import Band from '../models/band';
import $ from 'jquery';
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
        console.log(response);
      }
    });
  }
});
