Ext.define('Roq.controller.Queue', {
    extend: 'Ext.app.Controller',
    
    views: ['QueueList', 'HostLoadChart', 'QueueStatus', 'QueueParam'],
    stores: ['Queues', 'Hosts'],
    
    init: function() {
      console.log('Initializing "Queue" controller...');
    },
    
    onLaunch: function() {
      // Use the automatically generated getter to get the logs
      var queuesStore = this.getStore('Queues');
      queuesStore.load();
      
      var hostsStore = this.getStore('Hosts');
      hostsStore.load();
    },
});
