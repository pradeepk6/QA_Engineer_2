const reporter = require('cucumber-html-reporter');

const reportOptions = {
  theme: 'bootstrap',
  jsonFile: 'e2etest/reports/cucumber_report.json',
  output: 'e2etest/reports/cucumber_report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchRepornt: true,
  metadata: {
    'App Version': '0.1.1',
    'Test Environment': 'STAGING'
  }
};
 
reporter.generate(reportOptions);
