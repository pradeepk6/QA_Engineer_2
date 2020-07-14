const {BasePage} = require('./basePage');
const {By, until} = require('selenium-webdriver');

class NavBarPageFragment extends BasePage {

    navBar = By.id('primary-nav');

    constructor(World) {
        super(World);
    }
    async isLoaded(){
        return await this.World.driver
                            .wait(until.elementLocated(this.navBar), 10000, '')
                            .isDisplayed().then((bool) => { return bool });
    }
}
module.exports = {NavBarPageFragment}
