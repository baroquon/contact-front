import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveContact: function(){
      var name = this.get('newName'),
          phone = this.get('newPhone');

      var newContact = this.store.createRecord('contact', {
        phone: phone,
        name: name
      });

      this.set('newName', '')
          .set('newPhone', '');

      newContact.save();
    }
  }
});
