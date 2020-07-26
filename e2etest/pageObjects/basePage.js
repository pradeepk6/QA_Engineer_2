class BasePage {

    constructor(World) {
        this.World = World;
        this.driver = this.World.driver;
    }

    open(url) {
        return this.World.driver.get(url);
    }
}
module.exports = {BasePage}
