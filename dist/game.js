"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGameScreenshots = exports.getGameTitle = void 0;
const constructLink_1 = require("./helpers/constructLink");
const loadPage_1 = require("./helpers/loadPage");
// element selectors
const titleSelector = 'div.header > h1.game_title';
const screenshotsSelector = 'div.screenshot_list a';
const descriptionSelector = 'div.formatted_description';
/**
 * Get the title of a game
 * @param {string | GameInput} game The game's url or author name and game slug
 */
const getGameTitle = async (game) => {
    const page = await (0, loadPage_1.loadPage)((0, constructLink_1.constructGameLink)(game));
    const title = page(titleSelector);
    return title.text();
};
exports.getGameTitle = getGameTitle;
/**
 * Get the screenshot urls of a game
 * @param {string | GameInput} game The game's url or author name and game slug
 */
const getGameScreenshots = async (game) => {
    const page = await (0, loadPage_1.loadPage)((0, constructLink_1.constructGameLink)(game));
    return page(screenshotsSelector)
        .map((i, el) => {
        return page(el).attr('href');
    })
        .get();
};
exports.getGameScreenshots = getGameScreenshots;
//# sourceMappingURL=game.js.map