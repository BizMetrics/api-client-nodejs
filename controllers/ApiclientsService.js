'use strict';

exports.POST_controllers_api_Clients$_create = function(client) {

  var examples = {};
  
  examples['application/json'] = {
  "name" : "aeiou",
  "classifiers" : "",
  "description" : "aeiou",
  "externalId" : {
    "externalId" : "aeiou"
  },
  "extCreationInstant" : "2015-04-10T21:44:27.815+0000",
  "extLastModifiedInstant" : "2015-04-10T21:44:27.815+0000",
  "email" : "aeiou"
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.POST_controllers_api_Clients$_createFromArray = function(clients) {

  var examples = {};
  
  examples['application/json'] = {
  "empty" : true
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
