const {BasePage} = require('./basePage');
const {By, until} = require('selenium-webdriver');

class CreateNewAccountPage extends BasePage {

    createNewAccount_div = By.css("div.card.block");

    constructor(World) {
        super(World);
    }

    // check two conditions
    async isLoaded() {
        let pageTitle = await this.getTitle();
        let pageTitleMatches = pageTitle.toLowerCase().includes('register');
        let register_msg =  await this.World.driver
                                        .wait(until.elementLocated(this.createNewAccount_div), 10000, '')
                                        .getText().then((txt) => { return txt });
        let registerMsgDisplayed = register_msg.toLowerCase().includes('create an account');
        return (pageTitleMatches && registerMsgDisplayed);
        return (pageTitleMatches && registerMsgDisplayed);
    }

}
module.exports = {CreateNewAccountPage}
