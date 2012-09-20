Ext.define('Roq.view.QueueParam', {
    extend: 'Ext.window.Window',
    
    alias: 'widget.queueparam',
    
    store: 'Queues',
    
    //Default parameters
    title: 'Queue parameters',
    height: 200,
    width: 400,
    layout: 'fit',
    
    initComponent: function() {
        console.log('Initializing the queueparam widget...');
        
        this.html = "<p>Parameters edition goes here!</p>"
        
        this.callParent(arguments);
    }
});
