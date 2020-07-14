const {BasePage} = require('./basePage');
const {By, until} = require('selenium-webdriver');
const fetch = require("node-fetch");

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
    async isAllLinksFunctional() {
        let bool = true;
        let links_we =  await this.World.driver.wait(until.elementsLocated(this.allLinks), 10000,'');
        let acceptableStatusArr = [200,999];
        for (let we of links_we) {
            let url = await we.getAttribute('href');
            let response = await fetch(url);
            let status = response.status;
            // linkedin might occassionally throw 999
            if (!acceptableStatusArr.includes(status)) {
                console.log('fetching url : ' + url + ' returned status : ' + response.status);
                bool = false;
            }
        }
       return bool;
    }
}
module.exports = {FooterPageFragment}