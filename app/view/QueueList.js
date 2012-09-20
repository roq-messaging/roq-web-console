Ext.define('Roq.view.QueueList', {
    extend: 'Ext.grid.Panel',
    
    alias: 'widget.queuelist',
    
    store: 'Queues',
    
    title: 'Queues list',
    
    initComponent: function() {
        console.log('Initializing the queuelist widget...');
        
        this.columns = [
            {header: 'ID',  dataIndex: 'id',  flex: 1},
            {header: 'Queue Name', dataIndex: 'name', flex: 1},
            {header: '# of producers',  dataIndex: 'NbProducers',  flex: 1},
            {header: '# of subscribers', dataIndex: 'NbSubscribers', flex: 1},
            {header: '# of hosts',  dataIndex: 'NbHosts',  flex: 1},
            {header: '# of exchanges', dataIndex: 'NbExchanges', flex: 1}
        ];
        
        this.bbar = Ext.create('Ext.PagingToolbar', {
            store: this.store,
            displayInfo: true,
            displayMsg: 'Displaying queues {0} - {1} of {2}',
            emptyMsg: "No queue to display",
        }),
        
        this.callParent(arguments);
    }
});
