"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGameScreenshots = exports.getGameDescription = exports.getGameTitle = exports.getGame = void 0;
const game_1 = require("./game");
var game_2 = require("./game");
Object.defineProperty(exports, "getGame", { enumerable: true, get: function () { return game_2.getGame; } });
Object.defineProperty(exports, "getGameTitle", { enumerable: true, get: function () { return game_2.getGameTitle; } });
Object.defineProperty(exports, "getGameDescription", { enumerable: true, get: function () { return game_2.getGameDescription; } });
Object.defineProperty(exports, "getGameScreenshots", { enumerable: true, get: function () { return game_2.getGameScreenshots; } });
__exportStar(require("./helpers/inputs"), exports);
exports.default = {
    getGame: game_1.getGame,
    getGameDescription: game_1.getGameDescription,
    getGameScreenshots: game_1.getGameScreenshots,
    getGameTitle: game_1.getGameTitle,
};
//# sourceMappingURL=index.js.map