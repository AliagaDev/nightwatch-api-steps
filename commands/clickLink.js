const link = require('../helpers/link');
const { client } = require('nightwatch-api');

/**
 * Click a link.
 */
module.exports.command = function(locator) {
    let selector = link.buildLinkSelector(locator);
    client.assert.visible(selector);
    client.click(selector);

    return this;
};
