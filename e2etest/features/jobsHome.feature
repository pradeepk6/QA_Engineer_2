Feature: Jobs page

  Background:
    Given I go to jobs page

  Scenario: Navigation bar renders
    Then I should see the navigation bar
    And I should see search fragment loaded
    And I should see search-by-sector fragment loaded
    And I should see footer page loaded


  Scenario: All links on Footer page are functional
    Then All links on Footer Page should be functional

  Scenario: Clicking on login link should take you to login page
    When I click on login link
    Then should be on login page
 @wip
  Scenario: Clicking on Create account link should take you to register page
    When I click on create account link
    Then should be on account register page
