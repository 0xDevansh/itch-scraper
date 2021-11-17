const { JSDOM } = require('jsdom');
const checkLink = require('./checkLink.js');

const getAuthorUser = (link) => {
  const linkType = checkLink(link);
  if (linkType === 0 || linkType === 1) return link.slice(8).split('.')[0];
};

const getAuthorUrl = (link) => {
  const linkType = checkLink(link);
  if (linkType === 1) return link;
  else {
    const splitLink = link.split('/');
    return splitLink.slice(0, splitLink.length - 1).join('/');
  }
};

const getAuthorName = async (link) => {
  const authorLink = getAuthorUrl(link);
  const dom = await JSDOM.fromURL(authorLink);
  const { document } = dom.window;
  const author = document.querySelector('#profile_header > .text_header > h1').textContent;
  return author;
};

const getAuthorBio = async (link) => {
  const authorLink = getAuthorUrl(link);
  const dom = await JSDOM.fromURL(authorLink);
  const { document } = dom.window;
  const bio = document.querySelector('div.user_profile > p').textContent;
  return bio;
};

const getAuthorGames = async (link) => {
  const authorLink = getAuthorUrl(link);
  const dom = await JSDOM.fromURL(authorLink);
  const { document } = dom.window;
  const gameDoms = document.querySelectorAll('div.game_cell.has_cover > a');
  const games = [];
  gameDoms.forEach((game) => games.push(game.getAttribute('href')));
  return games;
};

const getAuthorSocialLinks = async (link) => {
  const authorLink = getAuthorUrl(link);
  const dom = await JSDOM.fromURL(authorLink);
  const { document } = dom.window;
  const linkDoms = document.querySelectorAll('div.user_links > span.link_group > a');
  const socialLinks = [];
  linkDoms.forEach((link) => socialLinks.push(link.getAttribute('href')));
  return socialLinks;
};

const getAuthor = async (link) => {
  const url = getAuthorUrl(link);
  const user = getAuthorUser(link);
  const name = await getAuthorName(link);
  const bio = await getAuthorBio(link);
  const games = await getAuthorGames(link);
  const socialLinks = await getAuthorSocialLinks(link);

  return { url, user, name, bio, games, socialLinks };
};

module.exports = {
  getAuthorName,
  getAuthorUrl,
  getAuthorUser,
  getAuthorBio,
  getAuthorGames,
  getAuthorSocialLinks,
  getAuthor,
};
