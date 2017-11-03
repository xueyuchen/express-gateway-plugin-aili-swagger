module.exports = {
    version: '1.2.0',
    init: function (pluginContext) {
      pluginContext.registerGatewayRoute(function (gatewayExpressApp) {
        gatewayExpressApp.get('/hello', (req, res) => {
          console.log('in hello')
          res.json({hello: 'Express-Gateway'});
        });
      });
    }
  };
  