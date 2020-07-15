const {Given, When, Then} = require('cucumber');
const World = require('../support/world');
const {JobsHomePage} = require('../pageObjects/jobsHomePage');
const {LoginPage} = require('../pageObjects/loginPage');
const {CreateNewAccountPage} = require('../pageObjects/createNewAccountPage');
const {assert} = require('chai').use(require('chai-string'));

let jobsHomePage;
let footerPageFragment;
let loginPage;
let createNewAccountPage;

Given(/^I go to jobs page$/, () => {
    jobsHomePage = new JobsHomePage(World);
    footerPageFragment = jobsHomePage.footerPageFragment;
    jobsHomePage.open(jobsHomePage.URL);
});

Then('I should see the navigation bar', async () => {
    assert.isTrue(await jobsHomePage.navBarPageFragment.isLoaded());
});

Then('I should see search fragment loaded', async () => {
    assert.isTrue(await jobsHomePage.searchPageFragment.isSearchJobsFragmentLoaded());
});

Then('I should see search-by-sector fragment loaded', async () => {
    assert.isTrue(await jobsHomePage.searchPageFragment.isBrowseJobsBySectorLoaded());
});

Then('I should see footer page loaded', async function () {
    assert.isTrue(await jobsHomePage.footerPageFragment.isLoaded());
});


Then('All links on Footer Page should be functional', async function () {
    assert.isTrue(await jobsHomePage.footerPageFragment.isAllLinksFunctional(), '');
});
Then('All links on nav bar should be functional', async function () {
    assert.isTrue(await jobsHomePage.navBarPageFragment.isAllLinksFunctional(), '');
});

When('I click on login link', function () {
    return jobsHomePage.clickSignin();
});
Then('should be on login page', async function () {
    loginPage = new LoginPage(World);
    assert.isTrue(await loginPage.isLoaded());
});
When('I click on create account link', function () {
    return jobsHomePage.clickCreateAccount();
});
Then('should be on account register page', async function () {
    createNewAccountPage = new CreateNewAccountPage(World);
    assert.isTrue(await createNewAccountPage.isLoaded());
});

When('I click on job alerts link', function () {
    //todo
    return true
});

Then('should be job alerts page', function () {
    //todo
    return true
});







