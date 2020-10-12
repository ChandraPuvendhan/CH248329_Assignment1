$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/eclipse-workspace/CH248329_Assignment2/src/main/java/com/qa/features/goibibo.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    },
    {
      "line": 19,
      "value": "#Step 1:Launch Goibibo website"
    },
    {
      "line": 20,
      "value": "#Step 2: Select any one option( Oneway ,Roundtrip,Multi City)"
    },
    {
      "line": 21,
      "value": "#Step 3: Select From \u0026 Destination"
    },
    {
      "line": 22,
      "value": "#Step 4: Select the Departure date - future Date"
    },
    {
      "line": 23,
      "value": "#Step 5: Select the traveller details and travel class"
    },
    {
      "line": 24,
      "value": "#Step 6: Search for the cheapest price and click on Book now button"
    },
    {
      "line": 25,
      "value": "#Step 7: Review the selection in the review page (please note need not submit booking"
    }
  ],
  "line": 26,
  "name": "Goibibo Website Test",
  "description": "",
  "id": "goibibo-website-test",
  "keyword": "Feature"
});
formatter.background({
  "line": 27,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 28,
  "name": "I launch Goibibo website",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I validate Goibibo Page title",
  "keyword": "Then "
});
formatter.match({
  "location": "GoibiboPageSteps.i_open_browser()"
});
formatter.result({
  "duration": 21487714000,
  "status": "passed"
});
formatter.match({
  "location": "GoibiboPageSteps.i_validate_Goibibo_Page_title()"
});
formatter.result({
  "duration": 1715135900,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Validate Goibibo Page Title",
  "description": "",
  "id": "goibibo-website-test;validate-goibibo-page-title",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "I Select any one option( Oneway ,Roundtrip,Multi City)",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I Select From \u0026 Destination",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I Select the Departure date - future Date",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I Select the traveller details and travel class",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I Search for the cheapest price",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "I click on Book now button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I Review the selection in the review page",
  "keyword": "Then "
});
formatter.match({
  "location": "GoibiboPageSteps.i_Select_any_one_option_Oneway_Roundtrip_Multi_City()"
});
formatter.result({
  "duration": 178795300,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat com.qa.stepDefinitions.GoibiboPageSteps.i_Select_any_one_option_Oneway_Roundtrip_Multi_City(GoibiboPageSteps.java:30)\r\n\tat ✽.When I Select any one option( Oneway ,Roundtrip,Multi City)(E:/eclipse-workspace/CH248329_Assignment2/src/main/java/com/qa/features/goibibo.feature:31)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "GoibiboPageSteps.i_Select_From_Destination()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GoibiboPageSteps.i_Select_the_Departure_date_future_Date()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GoibiboPageSteps.i_Select_the_traveller_details_and_travel_class()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GoibiboPageSteps.i_Search_for_the_cheapest_price()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GoibiboPageSteps.i_click_on_Book_now_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GoibiboPageSteps.i_Review_the_selection_in_the_review_page()"
});
formatter.result({
  "status": "skipped"
});
});