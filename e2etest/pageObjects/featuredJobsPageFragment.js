const {BasePage} = require('./basePage');
const {By, until} = require('selenium-webdriver');

class FeaturedJobsPageFragment extends BasePage {
    constructor(World) {
        super(World);
    }

}
module.exports = {FeaturedJobsPageFragment}
