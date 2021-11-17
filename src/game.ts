import { GameInput, Game } from './helpers/inputs';
import { constructGameLink } from './helpers/constructLink';
import { loadPage } from './helpers/loadPage';

// element selectors
const titleSelector = 'div.header > h1.game_title';
const screenshotsSelector = 'div.screenshot_list a';
const descriptionSelector = 'div.formatted_description';

/**
 * Get the title of a game
 * @param {string | GameInput} game The game's url or author name and game slug
 * @return {Promise<string>}
 */
export const getGameTitle = async (game: string | GameInput): Promise<string> => {
  const page = await loadPage(constructGameLink(game));

  const title = page(titleSelector);
  return title.text();
};

/**
 * Get the screenshot urls of a game
 * @param {string | GameInput} game The game's url or author name and game slug
 * @return {Promise<string[]>}
 */
export const getGameScreenshots = async (game: string | GameInput): Promise<string[]> => {
  const page = await loadPage(constructGameLink(game));

  return page(screenshotsSelector)
    .map((i, el) => {
      return page(el).attr('href');
    })
    .get();
};

/**
 * Get the description of a game
 * @param {string | GameInput} game The game's url or author name and game slug
 * @return {Promise<string>}
 */
export const getGameDescription = async (game: string | GameInput): Promise<string> => {
  const page = await loadPage(constructGameLink(game));

  const title = page(descriptionSelector);
  return title.text();
};

/**
 * Get all details of a game
 * @param {string | GameInput} game The game's url or author name and game slug
 * @return {Promise<Game>}
 */
export const getGame = async (game: string | GameInput): Promise<Game> => {
  const title = await getGameTitle(game);
  const description = await getGameDescription(game);
  const screenshots = await getGameScreenshots(game);

  return {
    title,
    description,
    screenshots,
  };
};
