'use strict';

exports.POST_controllers_api_Refunds$_createRefund = function(refundbean) {

  var examples = {};
  
  examples['application/json'] = {
  "subsId" : {
    "externalId" : "aeiou"
  },
  "amount" : 123,
  "originalAmount" : 123,
  "externalId" : "",
  "client" : {
    "name" : "aeiou",
    "classifiers" : "",
    "description" : "aeiou",
    "externalId" : "",
    "extCreationInstant" : "2015-04-10T21:44:27.871+0000",
    "extLastModifiedInstant" : "2015-04-10T21:44:27.871+0000",
    "email" : "aeiou"
  },
  "id" : "",
  "subscription" : {
    "amount" : 123,
    "clientId" : "aeiou",
    "externalId" : "",
    "extActivationDate" : "2015-04-10T21:44:27.871+0000",
    "extCreationInstant" : "2015-04-10T21:44:27.871+0000",
    "subsInterval" : {
      "hours" : 123,
      "seconds" : 123,
      "months" : 123,
      "weeks" : 123,
      "periodType" : {
        "name" : "aeiou"
      },
      "minutes" : 123,
      "fieldTypes" : [ {
        "name" : "aeiou"
      } ],
      "values" : [ 123 ],
      "days" : 123,
      "millis" : 123,
      "years" : 123
    },
    "extEndDate" : "2015-04-10T21:44:27.871+0000",
    "canceledAt" : "2015-04-10T21:44:27.871+0000",
    "name" : "aeiou",
    "classifiers" : "",
    "planId" : "aeiou",
    "extLastModifiedInstant" : "2015-04-10T21:44:27.871+0000",
    "status" : ""
  },
  "extCreationInstant" : "2015-04-10T21:44:27.871+0000"
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
