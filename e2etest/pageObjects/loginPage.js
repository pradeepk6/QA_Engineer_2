const {BasePage} = require('./basePage');
const {By, until} = require('selenium-webdriver');

class LoginPage extends BasePage {

    signinPassword_txtbox = By.id('signinpassword');

    constructor(World) {
        super(World);
    }

    async isLoaded() {
        const pageTitleMatches = this.driver.wait(until.titleContains('Logon'),10000,'');
        const pwd_txtField_displayed = await this.World.driver.findElement(this.signinPassword_txtbox)
                                                    .isDisplayed().then((bool) => { return bool });
        return (pageTitleMatches && pwd_txtField_displayed);
    }

}
module.exports = {LoginPage}
