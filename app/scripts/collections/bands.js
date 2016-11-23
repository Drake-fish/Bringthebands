import Backbone from 'backbone';
import Band from '../models/band';
import $ from 'jquery';
import {hashHistory} from 'react-router';
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
        this.reset();
        this.add(response);
      }
    });
  },

});
