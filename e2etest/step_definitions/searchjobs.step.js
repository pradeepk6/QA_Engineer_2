const { Given, When, Then } = require('cucumber');
const World = require('../support/world');
const { assert } = require('chai').use(require('chai-string'));
const { SearchResultsPage } = require('../pageObjects/searchResultsPage');
const { JobDetailsPage } = require('../pageObjects/jobDetailsPage');
const { JobsHomePage } = require('../pageObjects/jobsHomePage');

let jobsSector;
let searchPageFragment;
let searchResultsPage;
let jobDetailsPage;
let jobsHomePage;

Given(/^I go to jobs home page$/, () => {
    jobsHomePage = new JobsHomePage(World);
    searchPageFragment = jobsHomePage.searchPageFragment;
    footerPageFragment = jobsHomePage.footerPageFragment;
    jobsHomePage.open(jobsHomePage.URL);
});

When(/^I search for jobs with keyword (.*) in location (.*)$/, async (keyword, location) => {
    await searchPageFragment.fillKeyword(keyword);
    await searchPageFragment.fillLocation(location);
    return await searchPageFragment.doSearch();
});

Then(/^search results should contain keyword (.*) and location (.*)$/, async (keyword,location) => {
    searchResultsPage = new SearchResultsPage(World);
    let searchResultsHeading = await searchResultsPage.getSearchResultsHeading();
    let jobListings = await searchResultsPage.getSearchResults();
    // each job listing should contain search-keyword and location
    for(let jobDesc of jobListings) {       
        assert.containIgnoreCase(jobDesc,keyword,'job description must contain keyword:'+keyword);
        assert.containIgnoreCase(jobDesc,keyword,'job description must contain location:'+location);
    } 
    // second condition : search-results heading must contain search-keyword and location
    assert.containIgnoreCase(searchResultsHeading, keyword,'search-results heading must contain search-keyword'+keyword);
    assert.containIgnoreCase(searchResultsHeading, location,'search-results heading must contain location'+location);
});

When(/^I search for jobs by sector (.*)$/, async (sector) => {
    jobsSector = sector;
    return await searchPageFragment.browseJobsBySector(sector);
});

Then(/^I should see jobs only from that sector(.*)$/, async (sectorKeywords) => {
    searchResultsPage = new SearchResultsPage(World);
    let keywordArr = sectorKeywords.trim().split(",");
    let jobListings = await searchResultsPage.getSearchResults();
    for(let jobDesc of jobListings) {
        //check if job description contains atleast one sector keyword
        assert.isTrue(keywordArr.some(keyword => jobDesc.toLowerCase().includes(keyword.toLowerCase())),
                            'Job description must contain atleast one secktor keyword' + jobDesc);
    }    
    // second condition : search-results heading mentions the right sector
    let jobsHeading = await searchResultsPage.getBrowsebySectorResultsHeading();
    assert.containIgnoreCase(jobsHeading,jobsSector);
});

When(/^I click further on first job listing/, async () => {
    searchResultsPage = new SearchResultsPage(World);
    return await searchResultsPage.viewDetailsOfFirstJobListing();
});

Then(/^I should see job with details (.*) and apply widget$/, async (jobKeyWord) => {
    jobDetailsPage = new JobDetailsPage(World);
    let apply_displayed = await jobDetailsPage.isApplyDisplayed();
    let jobDescription = await jobDetailsPage.getJobDescription();                              
    assert.isTrue(apply_displayed);
    //as new jobs are posted this e2etest will fail so for now let the keyword be empty
    assert.containIgnoreCase(jobDescription,jobKeyWord,'if new jobs');
});

