Ext.define('Roq.model.Queue', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name', 'NbProducers', 'NbSubscribers', 'NbHosts', 'NbExchanges', 'ExchangesList', 'HostsList' ],

    proxy: {
        type: 'ajax',
        url: 'data/queues.json',
        reader: {
            type: 'json',
            root: 'rows',
            totalProperty: 'results'
        }
    }
});
