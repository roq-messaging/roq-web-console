Ext.define('Roq.view.QueueStatus', {
    extend: 'Ext.Panel',
    
    alias: 'widget.queuestatus',
    
    store: 'Queues',
    
    title: 'Queue status',
    
    initComponent: function() {
        console.log('Initializing the queuestatus widget...');
        
        this.html = "<p>Detailled status goes here!</p>"
        
        this.callParent(arguments);
    }
});
