const authorRegex = /^https:\/\/([a-zA-Z0-9-\._~:\/\?#\[\]@!\$&'\(\)\*\+,;=]+).itch\.io([\/]?)$/;
const gameRegex =
  /^https:\/\/([a-zA-Z0-9-\._~:\/\?#\[\]@!\$&'\(\)\*\+,;=]+).itch\.io\/([a-zA-Z0-9-\._~:\/\?#\[\]@!\$&'\(\)\*\+,;=]+)$/;
const jamPageRegex = /^https:\/\/([www\.]?)itch\.io\/jam\/([a-zA-Z0-9-\._~:\/\?#\[\]@!\$&'\(\)\*\+,;=]+)([\/]?)$/;
const jamEntriesRegex =
  /^https:\/\/([www\.]?)itch\.io\/jam\/([a-zA-Z0-9-\._~:\/\?#\[\]@!\$&'\(\)\*\+,;=]+)\/entries([\/]?)$/;

const checkLink = (link) => {
  // check through all regexes
  if (gameRegex.test(link)) return 0;
  else if (authorRegex.test(link)) return 1;
  else if (jamPageRegex.test(link)) return 2;
  else if (jamEntriesRegex.test(link)) return 3;
  // ERROR TIME
  else throw Error('Link is not a valid itch.io url');
};
/*
  0: game link
  1: author page link
  3: jam link
  4: jam submission link
*/

module.exports = checkLink;

// ! DANGER ZONE
// ! Do not delete these
// * Match https://author.itch.io/game
// ^https:\/\/([a-zA-Z0-9-\._~:\/\?#\[\]@!\$&'\(\)\*\+,;=]+).itch\.io\/([a-zA-Z0-9-\._~:\/\?#\[\]@!\$&'\(\)\*\+,;=]+)$
// * Match https://author.itch.io/
// ^https:\/\/([a-zA-Z0-9-\._~:\/\?#\[\]@!\$&'\(\)\*\+,;=]+).itch\.io([\/]?)$
// * Match https://www/itch.io/jam/jam-name/
// ^https:\/\/([www\.]?)itch\.io\/jam\/([a-zA-Z0-9-\._~:\/\?#\[\]@!\$&'\(\)\*\+,;=]+)([\/]?)$
// * Match https://www/itch.io/jam/jam-name/entries
// ^https:\/\/([www\.]?)itch\.io\/jam\/([a-zA-Z0-9-\._~:\/\?#\[\]@!\$&'\(\)\*\+,;=]+)\/entries([\/]?)$
