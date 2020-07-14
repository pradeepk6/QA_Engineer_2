const fetch = require("node-fetch");

// fetch all links using fetch library
async function checkAllLinksFunctional(links_we) {
    let bool = true;
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
module.exports = {checkAllLinksFunctional}
