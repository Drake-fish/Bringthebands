import Backbone from 'backbone';
import VotedBand from '../models/VotedBand';
import config from '../config';
import {hashHistory} from 'react-router';
import $ from 'jquery';



export default Backbone.Collection.extend({
  model: VotedBand,
  url:'https://api.backendless.com/v1/data/bands',

  parse(data){
    return data.data
  }
});
