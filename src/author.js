const { JSDOM } = require('jsdom');
const checkLink = require('./checkLink.js');

const getAuthorUser = link => {
  try {
    const linkType = checkLink(link);
    if (linkType === 0 || linkType === 1) return link.slice(8).split('.')[0];
  } catch (err) {
    console.log(err);
    return null;
  }
};

const getAuthorUrl = link => {
  try {
    const linkType = checkLink(link);
    if (linkType === 1) return link;
    else {
      const splitLink = link.split('/');
      return splitLink.slice(0, splitLink.length - 1).join('/');
    }
  } catch (err) {
    console.log(err);
    return null;
  }
};

const getAuthorName = async link => {
  const authorLink = getAuthorUrl(link);
  const dom = await JSDOM.fromURL(authorLink);
  const { document } = dom.window;
  const author = document.querySelector('#profile_header > .text_header > h1')
    .textContent;
  return author;
};

const getAuthor = async link => {
  const url = getAuthorUrl(link);
  const user = getAuthorUser(link);
  const name = await getAuthorName(link);

  return { url, user, name };
};

module.exports = { getAuthorName, getAuthorUrl, getAuthorUser, getAuthor };
