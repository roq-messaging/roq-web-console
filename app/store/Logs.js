
Ext.define('Roq.store.Logs', {
  extend: 'Ext.data.Store',
  model: 'Roq.model.Log',
  autoLoad: false,
  pageSize: 25,
  //Explicitely includes the model
  requires: 'Roq.model.Log'
});
