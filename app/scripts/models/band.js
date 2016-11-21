import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';


export default Backbone.Model.extend({
idAttribute:'id',
defaults:{
  votes:0
}
});
