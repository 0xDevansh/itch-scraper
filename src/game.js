const { JSDOM } = require('jsdom');
const checkLink = require('./checkLink.js');

const getGameTitle = async link => {
  const linkType = checkLink(link);
  if (linkType !== 0) throw Error('Link is not a valid game url');
  const dom = await JSDOM.fromURL(link);
  const { document } = dom.window;
  const title = document.querySelector('div.header > h1.game_title')
    .textContent;
  return title;
};

const getGameScreenshots = async link => {
  const linkType = checkLink(link);
  if (linkType !== 0) throw Error('Link is not a valid game url');

  const dom = await JSDOM.fromURL(link);
  const { document } = dom.window;
  const screenshotDom = document.querySelectorAll('.screenshot_list a');

  const screenshots = [];
  screenshotDom.forEach(ss => screenshots.push(ss.getAttribute('href')));
  return screenshots;
};

const getGameDescription = async link => {
  const linkType = checkLink(link);
  if (linkType !== 0) throw Error('Link is not a valid game url');

  const dom = await JSDOM.fromURL(link);
  const { document } = dom.window;
  const desc = document.querySelector('div.formatted_description').textContent;

  return desc;
};

const getGameDetails = async link => {
  const title = await getGameTitle(link);
  const screenshots = await getGameScreenshots(link);
  const description = await getGameDescription(link);
  return { title, description, screenshots };
};

module.exports = {
  getGameTitle,
  getGameDescription,
  getGameScreenshots,
  getGameDetails,
};
