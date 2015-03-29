import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTSerializer.extend({
  extractArray: function(store, type, payload) {
    var payloadTemp = {};
    payloadTemp[type.typeKey] = payload;
    return this._super(store, type, payloadTemp);
  },
  extractSingle: function(store, type, payload, id) {
    var payloadTemp = {};
    payloadTemp[type.typeKey] = [payload];
    return this._super(store, type, payloadTemp, id);
  },
  serializeIntoHash: function(hash, type, record, options) {
    // TODO: I don't know about this. Needs to Be revised.
    Ember.merge(hash, this.serialize(record, options));
  }
});
