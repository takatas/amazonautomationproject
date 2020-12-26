const Helper = codeceptjs.helper;
const assert = require('assert');
const webdriver = require('WebDriver');

class Existing extends Helper {

    // before/after hooks
    _before() {
        // remove if not used
    }

    _after() {
        // remove if not used
    }

    async checkElementExisting(selector) {
        let browser = this.helpers['WebDriver'].browser;
        const element = await browser.$(selector);
        return element.isExisting();
    }

    async rightClickElementExisting(webDriverLocator) {

        let extElement = this.helpers['WebDriver']._locateFields(webDriverLocator).then
        return extElement.isExisting();
    }

}

module.exports = Existing;
