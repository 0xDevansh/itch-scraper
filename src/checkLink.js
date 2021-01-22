const authorRegex = /^https:\/\/([a-zA-Z0-9-\._~:\/\?#\[\]@!\$&'\(\)\*\+,;=]+).itch\.io([\/]?)$/;
const gameRegex = /^https:\/\/([a-zA-Z0-9-\._~:\/\?#\[\]@!\$&'\(\)\*\+,;=]+).itch\.io\/([a-zA-Z0-9-\._~:\/\?#\[\]@!\$&'\(\)\*\+,;=]+)$/;

const checkLink = link => {
  //check if link is a game link
  if (gameRegex.test(link)) return 0;
  //Check if link is author link
  else if (authorRegex.test(link)) return 1;
  //ERROR TIME
  else throw Error('Link is not a valid itch.io url');
};
// * 0 means the link is a game url, while 1 means it's an author page url

module.exports = checkLink;

// !DANGER ZONE
// !Do not delete these
// *Match https://author.itch.io/game
// ^https:\/\/([a-zA-Z0-9-\._~:\/\?#\[\]@!\$&'\(\)\*\+,;=]+).itch\.io\/([a-zA-Z0-9-\._~:\/\?#\[\]@!\$&'\(\)\*\+,;=]+)$
// *Match https://author.itch.io/
// ^https:\/\/([a-zA-Z0-9-\._~:\/\?#\[\]@!\$&'\(\)\*\+,;=]+).itch\.io([\/]?)$
