const {BasePage} = require('./basePage');
const {By, until} = require('selenium-webdriver');

class SearchResultsPage extends BasePage {

    searchResults_we = By.css("#listing>li[class*='lister__item ']");
    searchResultsHeading = By.id('searching');
    browseBySectorResultsHeading = By.id('browsing');
    viewDetails = By.linkText('View details');

    constructor(World) {
        super(World);
    }

    async getSearchResults() {
        let jobListings_we = await this.World.driver.wait(until.elementsLocated(this.searchResults_we), 10000, '');
        let jobsArr = [];
        for (let we of jobListings_we) {
            jobsArr.push(await we.getText());
        }
        return jobsArr;
    }

    async getSearchResultsHeading() {
        return await this.World.driver.wait(until.elementLocated(this.searchResultsHeading), 10000,'').getText();
    }

    async getBrowsebySectorResultsHeading() {
        return this.World.driver
            .wait(until.elementLocated(this.browseBySectorResultsHeading), 10000,'')
            .getText();
    }

    async viewDetailsOfFirstJobListing() {
        let viewDetails_we = this.World.driver.wait(until.elementLocated(this.viewDetails), 10000,'');
        return await this.World.driver.wait(until.elementIsVisible(viewDetails_we), 10000,'').click();
    }
}
module.exports = {SearchResultsPage}