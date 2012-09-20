Ext.define('Roq.store.Hosts', {
  extend: 'Ext.data.Store',
  model: 'Roq.model.Host',
  //Explicitely includes the model
  requires: 'Roq.model.Host'
});
