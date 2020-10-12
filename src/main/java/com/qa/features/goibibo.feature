#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
#Step 1:Launch Goibibo website
#Step 2: Select any one option( Oneway ,Roundtrip,Multi City)
#Step 3: Select From & Destination
#Step 4: Select the Departure date - future Date
#Step 5: Select the traveller details and travel class
#Step 6: Search for the cheapest price and click on Book now button
#Step 7: Review the selection in the review page (please note need not submit booking
Feature: Goibibo Website Test
Background:
      Given I launch Goibibo website
    Then I validate Goibibo Page title
  Scenario: Validate Goibibo Page Title
    When I Select any one option( Oneway ,Roundtrip,Multi City)
    Then I Select From & Destination
    Then I Select the Departure date - future Date
    Then I Select the traveller details and travel class
    Then I Search for the cheapest price
    And I click on Book now button
    Then I Review the selection in the review page
