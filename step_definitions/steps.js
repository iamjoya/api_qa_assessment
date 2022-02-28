const {I} = inject();
const {camelCase} = require("lodash");
const {url} = require("../utilities/url");
const {apir} = require("../utilities/utils");
const {assert} = require("chai");
const {dataTableArgument} = require('codeceptjs');


Given(/^I created a "(.*)" request for "(.*)" request for endpoint "(.*)"$/, (method, urlKey, ep) => {
  I.request = {
    "method": method,
    "host": url[camelCase(urlKey)],
    "endpoint": ep
  };
});

Given(/^key-values "(.*)": "(.*)" are present in the request headers$/, (headerKey, headerValue) => {
  let headerObj = {};
  headerObj[headerKey] = headerValue;
  I.request.headers = headerObj;
});

Given(/^key-values "(.*)": "(.*)" is presented in the query params$/, (queryKey, queryValue) => {
  let queryObj = {};
  queryObj[queryKey] = queryValue;
  I.request.query = queryObj;
});

When(/^I send the request$/, async () => {
  I.request.requestBody = I.reqBody;
  I.response = await apir(I.request);
  I.resBody = I.response.body;

});

Then(/^the response status should be "(.*)"$/, (expectedStatus) => {
  assert.strictEqual(I.response.statusCode, Number(expectedStatus), 'Incorrect Status code');
});

Then(/^the value of "(.*)" in response body should be "(.*)"$/, (key, expectedValue) => {
  if (key == "id") {
    expectedValue = Number(expectedValue);
    assert.isNumber(I.resBody[key]);
  }
  assert.strictEqual(I.resBody[key], expectedValue, `Value for ${key} is incorrect.`);
});

Then(/^in the response body, the following data are present:$/, (expectedValue) => {
  expectedRes = JSON.stringify(expectedValue);

  assert.exists(I.resBody, expectedRes, 'Object values not equal.');
});

Then(/^the response body should be "(.*)"$/, (expectedValue) => {
  assert.isEmpty(I.resBody, expectedValue, 'Body contains a value');
});

Then(/^the user total count should be "(.*)"$/, (key, expectedValue) => {

  if (key == "id") {
    expectedValue = Number(expectedValue);
    assert.isNumber(I.resBody[key]);
  }
  actualValue =  I.resBody.length;
  assert.equal(actualValue, key, `Value for ${key} is incorrect.`);

});

