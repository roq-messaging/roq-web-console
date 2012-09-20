Ext.define('Roq.store.Queues', {
  extend: 'Ext.data.Store',
  model: 'Roq.model.Queue',
  autoLoad: false,
  pageSize: 6,
  //Explicitely includes the model
  requires: 'Roq.model.Queue'
});
