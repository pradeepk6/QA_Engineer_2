const {BasePage} = require('./basePage');
const {SearchPageFragment} = require('./searchPageFragment');
const {FooterPageFragment} = require('./footerPageFragment');
const {NavBarPageFragment} = require('./navBarPageFragment');

class JobsHomePage extends BasePage {

    URL = 'https://jobs.economist.com';
    searchPageFragment;
    footerPageFragment;
    navBarPageFragment;

    constructor(World) {
        super(World);
        this.searchPageFragment = new SearchPageFragment(this.World);
        this.footerPageFragment = new FooterPageFragment(this.World);
        this.navBarPageFragment = new NavBarPageFragment(this.World);
    }

     async isNavBarLoaded() {
        //console.log('navbar : ' + this.navBarPageFragment);
        return await this.navBarPageFragment.isLoaded();
    }
    async isSearchFragmentLoaded() {
        return await this.searchPageFragment.isSearchJobsFragmentLoaded();
    }

    async isBrowseJobsBySectorLoaded() {
        return await this.searchPageFragment.isBrowseJobsBySectorLoaded();
    }

    async isFooterPageFragmentLoaded() {
        return await this.footerPageFragment.isLoaded();
    }
}
module.exports = {JobsHomePage}

