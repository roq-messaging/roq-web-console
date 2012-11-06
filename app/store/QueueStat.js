Ext.define('Roq.store.QueueStat', {
  extend: 'Ext.data.Store',
  model: 'Roq.model.Queue',
  autoLoad: false,
  pageSize: 6,
  //Explicitely includes the model
  requires: 'Roq.model.Queue',
  
  // Overriding the model's default proxy
  proxy: {
      type: 'ajax',
      url: 'http://roq.local:3000/queues/test/stats/get',
      reader: {
          type: 'json',
          root: 'results'
      }
  }
});
