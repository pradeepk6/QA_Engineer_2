const {BasePage} = require('./basePage');
const {By, until} = require('selenium-webdriver');

class CreateNewAccountPage extends BasePage {

    createNewAccount_div = By.css("div.card.block");

    constructor(World) {
        super(World);
    }

    // check two conditions
    async isLoaded() {
        const pageTitleMatches = this.driver.wait(until.titleContains('Register'),10000,'');
        const register_msg =  await this.driver
                                      .wait(until.elementLocated(this.createNewAccount_div), 10000, '')
                                      .getText().then((txt) => { return txt });
        const registerMsgDisplayed = register_msg.toLowerCase().includes('create an account');
        return (pageTitleMatches && registerMsgDisplayed);
    }
}
module.exports = {CreateNewAccountPage}
