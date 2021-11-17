"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGame = exports.getGameDescription = exports.getGameScreenshots = exports.getGameTitle = void 0;
const constructLink_1 = require("./helpers/constructLink");
const loadPage_1 = require("./helpers/loadPage");
// element selectors
const titleSelector = 'div.header > h1.game_title';
const screenshotsSelector = 'div.screenshot_list a';
const descriptionSelector = 'div.formatted_description';
/**
 * Get the title of a game
 * @param {string | GameInput} game The game's url or author name and game slug
 * @return {Promise<string>}
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
 * @return {Promise<string[]>}
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
/**
 * Get the description of a game
 * @param {string | GameInput} game The game's url or author name and game slug
 * @return {Promise<string>}
 */
const getGameDescription = async (game) => {
    const page = await (0, loadPage_1.loadPage)((0, constructLink_1.constructGameLink)(game));
    const title = page(descriptionSelector);
    return title.text();
};
exports.getGameDescription = getGameDescription;
/**
 * Get all details of a game
 * @param {string | GameInput} game The game's url or author name and game slug
 * @return {Promise<Game>}
 */
const getGame = async (game) => {
    const title = await (0, exports.getGameTitle)(game);
    const description = await (0, exports.getGameDescription)(game);
    const screenshots = await (0, exports.getGameScreenshots)(game);
    return {
        title,
        description,
        screenshots,
    };
};
exports.getGame = getGame;
//# sourceMappingURL=game.js.map