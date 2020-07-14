const {Given, Then} = require('cucumber');
const World = require('../support/world');
const {JobsHomePage} = require('../pageObjects/jobsHomePage');
const {assert} = require('chai').use(require('chai-string'));

let jobsHomePage;
let footerPageFragment;

Given(/^I go to jobs page$/, () => {
    jobsHomePage = new JobsHomePage(World);
    footerPageFragment = jobsHomePage.footerPageFragment;
    jobsHomePage.open(jobsHomePage.URL);
});

Then('I should see the navigation bar', async () => {
    console.log('jobsHomePage : ' + jobsHomePage.isNavBarLoaded());
    assert.isTrue(await jobsHomePage.isNavBarLoaded());
});

Then('I should see search fragment loaded', async () => {
    assert.isTrue(await jobsHomePage.isSearchFragmentLoaded());
});

Then('I should see search-by-sector fragment loaded', async () => {
    assert.isTrue(await jobsHomePage.isBrowseJobsBySectorLoaded());
});

Then('I should see footer page loaded',async function () {
    assert.isTrue(await jobsHomePage.isFooterPageFragmentLoaded());
});


Then('All links on Footer Page should be functional', async function () {
    assert.isTrue(await jobsHomePage.footerPageFragment.isAllLinksFunctional(),
                                'look for a console.log to see which link has failed');
});

