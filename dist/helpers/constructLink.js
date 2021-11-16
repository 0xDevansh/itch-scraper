"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructAuthorLink = exports.constructGameLink = void 0;
const checkLink_1 = require("./checkLink");
/**
 * Construct a game link from the input
 * @param input The game's url or title and author's name
 */
const constructGameLink = (input) => {
    if (typeof input === 'string') {
        (0, checkLink_1.checkLink)(input, 'game');
        return input;
    }
    const link = `https://${input.authorName}.itch.io/${input.title}`;
    (0, checkLink_1.checkLink)(link, 'game');
    return link;
};
exports.constructGameLink = constructGameLink;
/**
 * Construct a game link from the input
 * @param input The game's url or title and author's name
 */
const constructAuthorLink = (input) => {
    if (typeof input === 'string') {
        (0, checkLink_1.checkLink)(input, 'author');
        return input;
    }
    const link = `https://${input.name}.itch.io`;
    (0, checkLink_1.checkLink)(link, 'author');
    return link;
};
exports.constructAuthorLink = constructAuthorLink;
//# sourceMappingURL=constructLink.js.map