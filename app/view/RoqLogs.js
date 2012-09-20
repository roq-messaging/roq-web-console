Ext.define('Roq.view.RoqLogs', {
    extend: 'Ext.grid.Panel',
    
    alias: 'widget.roqlogs',
    
    store: 'Logs',
    
    title: 'Logs',
    
    initComponent: function() {
        console.log('Initializing the roqlogs widget...');
        
        this.columns = [
            {header: 'Date', dataIndex: 'timestamp', width: 85, renderer: Ext.util.Format.dateRenderer('m/d-H:i:s')},
            {header: 'Level',  dataIndex: 'level',  width: 60, filter: {
                type: 'list',
                options: ['Info', 'Warning', 'Error']
            }},
            {header: 'Log line', dataIndex: 'content', flex: 1}
        ];
        
        this.bbar = Ext.create('Ext.PagingToolbar', {
            store: this.store,
            emptyMsg: "No log to display",
        });
        
        this.callParent(arguments);
    }
});
