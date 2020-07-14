@searchjobs
Feature: Search jobs

  Background:
    Given I go to jobs home page

  Scenario Outline: Searching for a job correctly displays relevant search results

    When I search for jobs with keyword <keyword> in location <location>
    Then search results should contain keyword <keyword> and location <location>
    Examples:
      | keyword  | location |
      | Director | New York |

  Scenario Outline: After clicking on jobs by sector clicking further on a job listing shows you the job details, with an 'apply' button.

    And I search for jobs by sector <sector>
    When I click further on first job listing
    Then I should see job with details <jobDetails> and apply widget
    Examples:
      | sector  | jobDetails |
      | Charity | VisionFund |

  Scenario Outline: Clicking on a sector shows a list of jobs from only that sector

    When I search for jobs by sector <sector>
    Then I should see jobs only from that sector <sectorKeywords>
    Examples:
      | sector              | sectorKeywords                                               |
      | Banking and finance | finance,bank,banking,risk,treasury,investment,fund,economist,insurance |

