const { JSDOM } = require('jsdom');
const {
  getAuthorName,
  getAuthorUrl,
  getAuthorUser,
  getAuthorBio,
  getAuthorGames,
  getAuthorSocialLinks,
  getAuthor,
} = require('./src/author.js');
const {
  getGameTitle,
  getGameDescription,
  getGameScreenshots,
  getGame,
} = require('./src/game.js');

const getDetails = async link => {
  const author = await getAuthor(link);
  const game = await getGame(link);
  return { ...game, author };
};

module.exports = {
  getDetails,
  getAuthor,
  getAuthorName,
  getAuthorUrl,
  getAuthorUser,
  getAuthorBio,
  getAuthorGames,
  getAuthorSocialLinks,
  getGameTitle,
  getGameDescription,
  getGameScreenshots,
};
