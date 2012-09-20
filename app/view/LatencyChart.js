Ext.define('Roq.view.HostLoadChart', {
    extend: 'Ext.chart.Chart',
    
    alias: 'widget.latencychart',
    //Define new store for stats.
    store: 'Queues',
    
    title: 'Latency chart',
    width: 200,
    height: 150,
    animate: true,
    
    axes: [{
        type: 'Numeric',
        grid: true,
        minimum: 0,
        maximum: 100,
        position: 'left',
        fields: ['Latency'],
        title: 'Latency',
        grid: {
            odd: {
                fill: '#dedede',
                stroke: '#ddd',
                'stroke-width': 0.5
            }
        }
    }, {
        type: 'Time',
        position: 'bottom',
        fields: 'date',
        title: 'Time',
        dateFormat: 'H:m:s',
        groupBy: 'year,month,day',
        aggregateOp: 'sum',

        constrain: true,
        fromDate: new Date(2011, 1, 1),
        toDate: new Date(2011, 1, 7),
        grid: true
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
