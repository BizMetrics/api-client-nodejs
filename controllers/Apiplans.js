'use strict';

var url = require('url');


var Apiplans = require('./ApiplansService');


module.exports.POST_controllers_api_Plans$_create = function POST_controllers_api_Plans$_create (req, res, next) {
  var plan = req.swagger.params['plan'].value;
  

  var result = Apiplans.POST_controllers_api_Plans$_create(plan);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.POST_controllers_api_Plans$_createFromArray = function POST_controllers_api_Plans$_createFromArray (req, res, next) {
  var plans = req.swagger.params['plans'].value;
  

  var result = Apiplans.POST_controllers_api_Plans$_createFromArray(plans);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
