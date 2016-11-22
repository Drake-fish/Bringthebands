import Backbone from 'backbone';
import _ from 'underscore';
import VotedBand from '../models/VotedBand';
import config from '../config';
import {hashHistory} from 'react-router';
import $ from 'jquery';



export default Backbone.Collection.extend({
  model: VotedBand,
  url:'https://api.backendless.com/v1/data/bands',

  parse(data){
    return data.data;
  },
  addVotes({name, photo}){
       this.fetch({success:()=>{
           let band = this.findWhere({name: name});
       if(band){
           band.save({votes: band.get('votes')+1},
           {
             success: ()=>{
               hashHistory.push('bands');
             }
           });
       } else {
       this.create(
         {name, photo, votes:1},
         {
         success: ()=>{
           hashHistory.push('bands');
         }
       });
       }
     }
     });


   },

});
