"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkLink = void 0;
const gameRegex = /^https:\/\/[\w-]+\.itch\.io\/[\w-]+\/?$/;
const authorRegex = /^https:\/\/[\w-]+\.itch\.io\/?$/;
const checkLink = (link, type) => {
    let isValid;
    if (type === 'game')
        isValid = gameRegex.test(link);
    else if (type === 'author')
        isValid = authorRegex.test(link);
    if (!isValid)
        throw new Error('The url or author/game name provided are not valid');
};
exports.checkLink = checkLink;
//# sourceMappingURL=checkLink.js.map