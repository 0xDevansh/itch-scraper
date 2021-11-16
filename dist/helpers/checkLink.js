"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkLink = void 0;
const gameRegex = /^https:\/\/[\w-]+\.itch\.io\/[\w-]+\/?$/;
const authorRegex = /^https:\/\/[\w-]+\.itch\.io\/?$/;
/**
 * Check if the given link is valid
 * @param link The link to check
 * @param type The type of link
 */
const checkLink = (link, type) => {
    let isValid;
    if (type === 'game')
        isValid = gameRegex.test(link);
    else if (type === 'author')
        isValid = authorRegex.test(link);
    if (!isValid)
        throw new Error('The url or author/game name provided are malformed');
};
exports.checkLink = checkLink;
//# sourceMappingURL=checkLink.js.map