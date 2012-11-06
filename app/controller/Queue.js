Ext.define('Roq.controller.Queue', {
    extend: 'Ext.app.Controller',
    
    views: ['QueueList', 'HostLoadChart', 'QueueStatus', 'QueueParam'],
    stores: ['Queues', 'QueueStat'],
    
    init: function() {
      console.log('Initializing "Queue" controller...');
      
      this.control({
        'queuelist': {
          selectionchange: this.onQueueSelect
        }
      });
    },
    
    onLaunch: function() {
      // Use the automatically generated getter to get the logs
      var queuesStore = this.getStore('Queues');
      queuesStore.load();
      
      var queueStatStore = this.getStore('QueueStat');
      queueStatStore.load();
    },
    
    onQueueSelect: function(grid, record) {
      //Retrieve current queue name
      var curQueueName = record[0].get('Name');
      console.log('A queue has been clicked! '+ curQueueName);
      //Update queuestatus panel with relevant information
      var sp = Ext.widget('queuestatus');
      sp.html = "<p>You selected the queue </p>"
        + curQueueName
        + ".";
    }
});
