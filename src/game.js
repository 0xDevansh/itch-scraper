const { JSDOM } = require('jsdom');
const checkLink = require('./checkLink.js');

const getGameTitle = async link => {
  try {
    const linkType = checkLink(link);
    if (linkType === 0) {
      const dom = await JSDOM.fromURL(link);
      const { document } = dom.window;
      const title = document.querySelector('div.header > h1.game_title')
        .textContent;
      return title;
    } else throw Error('The provided link is not a valid game url');
  } catch (err) {
    console.log(err);
    return null;
  }
};

const getGameScreenshots = async link => {
  try {
    const linkType = checkLink(link);
    if (linkType === 0) {
      const dom = await JSDOM.fromURL(link);
      const { document } = dom.window;
      const screenshotDom = document.querySelectorAll('.screenshot_list a');
      let screenshots = [];
      screenshotDom.forEach(ss => screenshots.push(ss.getAttribute('href')));
      return screenshots;
    } else throw Error('The provided link is not a valid game url');
  } catch (err) {
    console.log(err);
    return null;
  }
};

const getGame = async link => {
  const title = await getGameTitle(link);
  const screenshots = await getGameScreenshots(link);
  return { title, screenshots };
};

module.exports = { getGameTitle, getGameScreenshots, getGame };
