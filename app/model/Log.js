Ext.define('Roq.model.Log', {
    extend: 'Ext.data.Model',
    fields: [
      {name: 'timestamp', type: 'date', dateFormat: 'U'},
      'level', 'content'
    ],

    proxy: {
        type: 'ajax',
        url: 'data/logs.json',
        reader: {
            type: 'json',
            root: 'rows',
            totalProperty: 'results'
        }
    }
});
