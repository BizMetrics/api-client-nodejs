'use strict';

var url = require('url');


var Apisubscriptions = require('./ApisubscriptionsService');


module.exports.POST_controllers_api_Subscriptions$_createSubscription = function POST_controllers_api_Subscriptions$_createSubscription (req, res, next) {
  var subscription = req.swagger.params['subscription'].value;
  

  var result = Apisubscriptions.POST_controllers_api_Subscriptions$_createSubscription(subscription);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.PUT_controllers_api_Subscriptions$_changeStatus = function PUT_controllers_api_Subscriptions$_changeStatus (req, res, next) {
  var subscriptionStatusChange = req.swagger.params['subscriptionStatusChange'].value;
  

  var result = Apisubscriptions.PUT_controllers_api_Subscriptions$_changeStatus(subscriptionStatusChange);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
