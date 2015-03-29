import Ember from 'ember';

export default Ember.Controller.extend({
  isObjectDirty: function(){
    this.model.forEach(function(contact){
      if(contact.get('isDirty')){
        console.log(contact.get('phone'));
        contact.save();
      }
    });
    return this.get('model').filterBy('isDirty', true).get('length');
  }.property('model.@each.phone')
});
