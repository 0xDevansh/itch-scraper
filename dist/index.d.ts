export { getGame, getGameTitle, getGameDescription, getGameScreenshots } from './game';
export * from './helpers/inputs';
declare const _default: {
    getGame: (game: string | import("./helpers/inputs").GameInput) => Promise<import("./helpers/inputs").Game>;
    getGameDescription: (game: string | import("./helpers/inputs").GameInput) => Promise<string>;
    getGameScreenshots: (game: string | import("./helpers/inputs").GameInput) => Promise<string[]>;
    getGameTitle: (game: string | import("./helpers/inputs").GameInput) => Promise<string>;
};
export default _default;
//# sourceMappingURL=index.d.ts.map