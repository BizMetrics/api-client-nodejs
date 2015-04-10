'use strict';

var url = require('url');


var Apiclients = require('./ApiclientsService');


module.exports.POST_controllers_api_Clients$_create = function POST_controllers_api_Clients$_create (req, res, next) {
  var client = req.swagger.params['client'].value;
  

  var result = Apiclients.POST_controllers_api_Clients$_create(client);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.POST_controllers_api_Clients$_createFromArray = function POST_controllers_api_Clients$_createFromArray (req, res, next) {
  var clients = req.swagger.params['clients'].value;
  

  var result = Apiclients.POST_controllers_api_Clients$_createFromArray(clients);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
