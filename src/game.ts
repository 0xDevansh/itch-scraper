import { GameInput } from './helpers/inputs';
import { constructGameLink } from './helpers/constructLink';
import { loadPage } from './helpers/loadPage';

// element selectors
const titleSelector = 'div.header > h1.game_title';
const screenshotsSelector = 'div.screenshot_list a';
const descriptionSelector = 'div.formatted_description';

/**
 * Get the title of a game
 * @param {string | GameInput} game The game's url or author name and game slug
 */
export const getGameTitle = async (game: string | GameInput) => {
  const page = await loadPage(constructGameLink(game));

  const title = page(titleSelector);
  return title.text();
};

/**
 * Get the screenshot urls of a game
 * @param {string | GameInput} game The game's url or author name and game slug
 */
export const getGameScreenshots = async (game: string | GameInput) => {
  const page = await loadPage(constructGameLink(game));

  return page(screenshotsSelector)
    .map((i, el) => {
      return page(el).attr('href');
    })
    .get();
};
