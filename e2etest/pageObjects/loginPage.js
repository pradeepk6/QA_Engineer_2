const {BasePage} = require('./basePage');
const {By, until} = require('selenium-webdriver');

class LoginPage extends BasePage {

    signinPassword_txtbox = By.id('signinpassword');

    constructor(World) {
        super(World);
    }
    async isLoaded() {
        let pageTitle = await this.getTitle();
        let pageTitleMatches = pageTitle.toLowerCase().includes('logon');
        let pwd_txtField_displayed = await this.World.driver.findElement(this.signinPassword_txtbox)
                                                    .isDisplayed().then((bool) => { return bool });
        return (pageTitleMatches && pwd_txtField_displayed);
    }

}
module.exports = {LoginPage}
