"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkLink = void 0;
const gameRegex = /^https:\/\/[\w-]+\.itch\.io\/[\w-]+\/?$/;
const authorRegex = /^https:\/\/[\w-]+\.itch\.io\/?$/;
const checkLink = (link, type) => {
    if (type === 'game')
        return gameRegex.test(link);
    else if (type === 'author')
        return authorRegex.test(link);
};
exports.checkLink = checkLink;
//# sourceMappingURL=checkLink.js.map