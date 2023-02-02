$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Sales.feature");
formatter.feature({
  "line": 2,
  "name": "Sales flow",
  "description": "description Class",
  "id": "sales-flow",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Sales"
    }
  ]
});
formatter.before({
  "duration": 12492926839,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User make a purchase with 2 item",
  "description": "",
  "id": "sales-flow;user-make-a-purchase-with-2-item",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User open the website sauce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User input \"standard_user\" as userName and input \"secret_sauce\" as pass",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User already on landing page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User Product list by \"Name (Z to A)\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User choice 2 product from the list",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.verifyLogin()"
});
formatter.result({
  "duration": 451992513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 12
    },
    {
      "val": "secret_sauce",
      "offset": 50
    }
  ],
  "location": "LoginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 695012248,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verifyLandingPage()"
});
formatter.result({
  "duration": 3261419464,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (Z to A)",
      "offset": 22
    }
  ],
  "location": "PurchaseSteps.sortProductValue(String)"
});
formatter.result({
  "duration": 3223100025,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.choiceProduct()"
});
formatter.result({
  "duration": 3166270046,
  "status": "passed"
});
formatter.after({
  "duration": 271132213,
  "status": "passed"
});
});