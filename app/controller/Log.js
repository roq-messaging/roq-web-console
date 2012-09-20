Ext.define('Roq.controller.Log', {
    extend: 'Ext.app.Controller',
    
    views: ['RoqLogs'],
    stores: ['Logs'],
    
    init: function() {
      console.log('Initializing "Log" controller...');
    },
    
    onLaunch: function() {
      // Use the automatically generated getter to get the logs
      var logsStore = this.getStore('Logs');
      logsStore.load();
    },
});
