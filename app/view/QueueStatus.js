Ext.define('Roq.view.QueueStatus', {
    extend: 'Ext.Panel',
    
    alias: 'widget.queuestatus',
    
    store: 'QueueStat',
    
    title: 'Queue status',
    
    initComponent: function() {
        console.log('Initializing the queuestatus widget...');
        
        this.html = "<p>Click on a queue to show its status here...</p>"
        
        this.callParent(arguments);
    }
});
