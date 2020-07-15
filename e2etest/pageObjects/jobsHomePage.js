const {BasePage} = require('./basePage');
const {SearchPageFragment} = require('./searchPageFragment');
const {FooterPageFragment} = require('./footerPageFragment');
const {NavBarPageFragment} = require('./navBarPageFragment');
const {FeaturedJobsPageFragment} = require('./featuredJobsPageFragment');
const {JobsBlogPageFragment} = require('./jobsBlogPageFragment');
const {By} = require('selenium-webdriver');

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

    clickSignin() {
        return this.World.driver.findElement(this.login_a).click();
    }

    clickCreateAccount() {
        return this.World.driver.findElement(this.createAccount_a).click();
    }
}
module.exports = {JobsHomePage}

