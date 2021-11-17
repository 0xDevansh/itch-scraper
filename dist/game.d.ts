import { GameInput, Game } from './helpers/inputs';
/**
 * Get the title of a game
 * @param {string | GameInput} game The game's url or author name and game slug
 * @return {Promise<string>}
 */
export declare const getGameTitle: (game: string | GameInput) => Promise<string>;
/**
 * Get the screenshot urls of a game
 * @param {string | GameInput} game The game's url or author name and game slug
 * @return {Promise<string[]>}
 */
export declare const getGameScreenshots: (game: string | GameInput) => Promise<string[]>;
/**
 * Get the description of a game
 * @param {string | GameInput} game The game's url or author name and game slug
 * @return {Promise<string>}
 */
export declare const getGameDescription: (game: string | GameInput) => Promise<string>;
/**
 * Get all details of a game
 * @param {string | GameInput} game The game's url or author name and game slug
 * @return {Promise<Game>}
 */
export declare const getGame: (game: string | GameInput) => Promise<Game>;
//# sourceMappingURL=game.d.ts.map