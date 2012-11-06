Ext.define('Roq.view.QueueList', {
    extend: 'Ext.grid.Panel',
    
    alias: 'widget.queuelist',
    
    store: 'Queues',
    
    title: 'Queues list',
    
    initComponent: function() {
        console.log('Initializing the queuelist widget...');
        
        this.columns = [
            {header: 'Queue Name', dataIndex: 'Name', flex: 1},
            
            {header: 'Queue Monitor Hostname',  dataIndex: 'Host',  flex: 1},
            {header: 'Status', dataIndex: 'State', flex: 1}
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
