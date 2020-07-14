const {BasePage} = require('./basePage');
const {By, until} = require('selenium-webdriver');
const {checkAllLinksFunctional} = require('../support/utils');

class NavBarPageFragment extends BasePage {

    navBar = By.id('primary-nav');

    // all links on nav bar only
    allLinks = By.css("#primary-nav a");

    constructor(World) {
        super(World);
    }
    async isLoaded(){
        return await this.World.driver
                            .wait(until.elementLocated(this.navBar), 10000, '')
                            .isDisplayed().then((bool) => { return bool });
    }

    async isAllLinksFunctional() {
        let links_we =  await this.World.driver.wait(until.elementsLocated(this.allLinks), 10000,'');
        return checkAllLinksFunctional(links_we);
    }
}
module.exports = {NavBarPageFragment}
