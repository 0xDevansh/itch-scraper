import { GameInput } from './helpers/inputs';
/**
 * Get the title of a game
 * @param {string | GameInput} game The game's url or author name and game slug
 */
export declare const getGameTitle: (game: string | GameInput) => Promise<string>;
/**
 * Get the screenshot urls of a game
 * @param {string | GameInput} game The game's url or author name and game slug
 */
export declare const getGameScreenshots: (game: string | GameInput) => Promise<any[]>;
//# sourceMappingURL=game.d.ts.map