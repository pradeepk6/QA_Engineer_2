const {BasePage} = require('./basePage');
const {SearchPageFragment} = require('./searchPageFragment');
const {FooterPageFragment} = require('./footerPageFragment');
const {NavBarPageFragment} = require('./navBarPageFragment');
const {FeaturedJobsPageFragment} = require('./featuredJobsPageFragment');
const {JobsBlogPageFragment} = require('./jobsBlogPageFragment');
const {By, until} = require('selenium-webdriver');

class JobsHomePage extends BasePage {

    URL = 'https://jobs.economist.com';

    navBarPageFragment;
    searchPageFragment;
    featuredJobsPageFragment
    jobsBlogPageFragment;
    footerPageFragment;

    login_a = By.linkText("Sign in");
    createAccount_a = By.linkText("Create account");

    constructor(World) {
        super(World);
        this.navBarPageFragment = new NavBarPageFragment(this.World);
        this.searchPageFragment = new SearchPageFragment(this.World);
        this.featuredJobsPageFragment = new FeaturedJobsPageFragment(this.World);
        this.jobsBlogPageFragment = new JobsBlogPageFragment(this.World);
        this.footerPageFragment = new FooterPageFragment(this.World);
    }

    async clickSignIn() {
        return await this.driver
                         .wait(until.elementLocated(this.login_a),10000,'')
                         .click();
    }

    async clickCreateAccount() {
        return await this.driver
                        .wait(until.elementLocated(this.createAccount_a), 10000, '' )
                        .click();
    }
}
module.exports = {JobsHomePage}

