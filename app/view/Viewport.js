Ext.require('Ext.chart.*');

Ext.define('Roq.view.Viewport', {
  extend: 'Ext.container.Viewport',
  
  
  
  layout: 'border',
  
  initComponent: function() {
      console.log('Initializign the Viewport...');
      
      this.items = [
        {//North container
          xtype: 'container',
          region: 'north',
          margins: '5 5 0 5',
          id: 'north-container',
          layout: 'fit',
          items: [
            {//Toolbar
              xtype: 'toolbar',
              id: 'top-toolbar',
              width: 500,
              items: [
                {
                    xtype: 'image',
                    src: '/resources/images/roq.png',
                    height: 30,
                    width: 30
                    
                },
                {
                    xtype: 'component',
                    html: '<h1>Web Management<br />Console</h1>',
                },
                {
                    xtype: 'button',
                    text: 'Queue management',
                    margins: '0 0 0 30',
                    
                },
                {
                    xtype: 'button',
                    text: 'Host management',
                },
                {
                    xtype: 'button',
                    text: 'Configure...',
                },
                '->',
                {
                    xtype    : 'textfield',
                    name     : 'field1',
                    emptyText: 'Quick lookup'
                }
              ]
            }
          ]
        },
        {//Central container
          xtype: 'container',
          region: 'center',
          id: 'center-container',
          layout: {
              type: 'vbox',
              align: 'stretch'
          },
          margins: '5 5 5 5',
          items: [
            {
                xtype: 'queuelist',
                height: 205
            },
            {
                xtype: 'queuestatus',
                height: 200,
                margins: '5 0 0 0',
            }/* Later maybe...,
            {
                xtype: 'container',
                flex: 1,
                margins: '5 0 0 0',
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                items: [
                  {
                    xtype: 'panel',
                    flex: 1,
                    title: 'Latency chart',
                    margins: '0 5 0 0',
                    items: [
                      {
                        xtype: 'hostloadchart',
                        flex: 1
                      }
                    ]
                  },
                  {
                    xtype: 'panel',
                    flex: 1,
                    title: 'Load chart',
                    items: [
                      {
                        xtype: 'hostloadchart',
                        flex: 1
                      }
                    ]
                  }
                ]
            }*/
          ]
        }/* No log currently...,
        {//East container
          xtype: 'roqlogs',
          region: 'east',
          margins: '5 5 5 5',
          width: 350,
          collapsible: true,
          id: 'east-container',
          layout: 'fit'
        }*/
      ];
      
      this.callParent();
  }
});
