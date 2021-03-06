const {BasePage} = require('./basePage');
const {By, until} = require('selenium-webdriver');

class SearchPageFragment extends BasePage {

    keyword_txtBox = By.id('keywords');
    location_txtBox = By.id('location');
    search_btn = By.css("input[type='submit'][value='Search']");
    bankingSector_a = By.xpath("//a[.='Banking and finance']");

    constructor(World) {
        super(World);
    }

    async fillKeyword(keyword) {
        await this.driver.findElement(this.keyword_txtBox).sendKeys(keyword);
    }

    async fillLocation(location) {
        await this.driver.findElement(this.location_txtBox).sendKeys(location);
    }

    async doSearch() {
        await this.driver.findElement(this.search_btn).submit();
    }

    async browseJobsBySector(sector) {
        return await this.driver
                          .wait(until.elementLocated({xpath: "//a[.='" + sector + "']"}), 10000, '')
                          .click();
    }

    async isSearchJobsFragmentLoaded() {
        //check if search-keyword text box is loaded
        return await this.driver
                            .wait(until.elementLocated(this.keyword_txtBox), 10000, '')
                            .isDisplayed().then((bool) => { return bool });
    }

    async isBrowseJobsBySectorLoaded() {
        // check if 'Banking and finance' is loaded
        return await this.driver
            .wait(until.elementLocated(this.bankingSector_a), 10000, '')
            .isDisplayed().then((bool) => { return bool });
    }
}
module.exports = {SearchPageFragment}
