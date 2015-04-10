'use strict';

var url = require('url');


var Apirefunds = require('./ApirefundsService');


module.exports.POST_controllers_api_Refunds$_createRefund = function POST_controllers_api_Refunds$_createRefund (req, res, next) {
  var refundbean = req.swagger.params['refundbean'].value;
  

  var result = Apirefunds.POST_controllers_api_Refunds$_createRefund(refundbean);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
