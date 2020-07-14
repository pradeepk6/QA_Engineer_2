class BasePage {

    constructor(World) {
        this.World = World;
    }

    open(url) {
        return this.World.driver.get(url);
    }

    getTitle() {
        return this.World.driver.getTitle().then((txt) => {return txt})
    }
}
module.exports = {BasePage}
