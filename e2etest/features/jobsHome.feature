Feature: Jobs page

  Background:
    Given I go to jobs page

  Scenario: Navigation bar renders
    Then I should see the navigation bar
    And I should see search fragment loaded
    And I should see search-by-sector fragment loaded
    And I should see footer page loaded

  @wip
  Scenario: All links on Footer page are functional
    Then All links on Footer Page should be functional