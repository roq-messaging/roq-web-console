Ext.define('Roq.model.Queue', {
    extend: 'Ext.data.Model',
    fields: ['Name', 'Host', 'State', 'exchangeList', 'exchanges', 'stats' ],

    proxy: {
        type: 'ajax',
        url: 'http://roq.local:3000/queues/list',
        reader: {
            type: 'json',
            root: 'rows',
            totalProperty: 'results'
        }
    }
});
