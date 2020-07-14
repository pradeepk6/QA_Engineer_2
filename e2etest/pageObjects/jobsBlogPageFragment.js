const {BasePage} = require('./basePage');
const {By, until} = require('selenium-webdriver');

class JobsBlogPageFragment extends BasePage {
    constructor(World) {
        super(World);
    }

}
module.exports = {JobsBlogPageFragment}
