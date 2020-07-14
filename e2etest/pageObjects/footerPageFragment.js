const {BasePage} = require('./basePage');
const {By, until} = require('selenium-webdriver');
const {checkAllLinksFunctional} = require('../support/utils');

class FooterPageFragment extends BasePage {

    // all links on footer only
    allLinks = By.css("footer div.wrapper.content a");

    constructor(World) {
        super(World);
    }

    isLoaded() {
        //todo
        return true;
    }

    // fetch all links using fetch library
    async isAllLinksFunctional() {
        let links_we =  await this.World.driver.wait(until.elementsLocated(this.allLinks), 10000,'');
       return checkAllLinksFunctional(links_we);
    }

}
module.exports = {FooterPageFragment}
