const {BasePage} = require('./basePage');
const {By, until} = require('selenium-webdriver');

class JobDetailsPage extends BasePage {

    apply_a = By.linkText('Apply');
    jobDescription_div = By.css('div.job-description');

    constructor(World) {
        super(World);
    }

    async getJobDescription() {
        return await this.driver
                            .findElement(this.jobDescription_div)
                            .getText().then((txt) => { return txt });
    }

    async isApplyDisplayed() {
        return await this.driver
                            .wait(until.elementLocated(this.apply_a), 10000,'')
                            .isDisplayed().then((bool) => { return bool });
    }
}
module.exports = {JobDetailsPage}
