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
  getGameDetails,
} = require('./src/game.js');

const getGame = async link => {
  const author = await getAuthor(link);
  const game = await getGameDetails(link);
  return { ...game, author };
};

module.exports = {
  // game methods
  getGame,
  getGameTitle,
  getGameDescription,
  getGameScreenshots,
  // author methods
  getAuthor,
  getAuthorName,
  getAuthorUrl,
  getAuthorUser,
  getAuthorBio,
  getAuthorGames,
  getAuthorSocialLinks,
};
