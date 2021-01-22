const { JSDOM } = require('jsdom');
const {
  getAuthorName,
  getAuthorUrl,
  getAuthorUser,
  getAuthor,
} = require('./src/author.js');
const { getGameTitle, getGameScreenshots, getGame } = require('./src/game.js');

const getDetails = async link => {
  const author = await getAuthor(link);
  const game = await getGame(link);
  return { ...game, author };
};

module.exports = {
  getDetails,
  getAuthorName,
  getAuthorUrl,
  getAuthorUser,
  getGameTitle,
  getGameScreenshots,
};
