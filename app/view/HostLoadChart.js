Ext.define('Roq.view.HostLoadChart', {
    extend: 'Ext.chart.Chart',
    
    alias: 'widget.hostloadchart',
    
    store: 'Hosts',
    
    title: 'Load chart',
    width: 200,
    height: 150,
    animate: true,
    
    axes: [{
        type: 'gauge',
        position: 'gauge',
        minimum: 0,
        maximum: 100,
        steps: 10,
        margin: -10
    }],
    
    initComponent: function() {
        console.log('Initializing the hostloadchart widget...');
        
        this.series = [{
            type: 'gauge',
            field: 'CpuLoad',
            donut: 60,
        }]
        
        
        this.callParent(arguments);
    }
    
    
});
