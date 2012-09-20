//Ext.Loader.setConfig({enabled:true});

Ext.application({
	name: 'Roq',
	
	autoCreateViewport: true,
	
	controllers: ['Log', 'Queue'],
		
	launch: function() {
		console.log('Starting application...');
		
	}
});
