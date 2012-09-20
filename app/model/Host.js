Ext.define('Roq.model.Host', {
    extend: 'Ext.data.Model',
    fields: ['Hostname', 'CpuLoad', 'NbQueues', 'NbExchanges' ],

    proxy: {
        type: 'ajax',
        url: 'data/hosts.json',
        reader: {
            type: 'json',
            root: 'rows',
            totalProperty: 'results'
        }
    }
});
