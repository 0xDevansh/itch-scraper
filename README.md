https://img.shields.io/static/v1?label=npm&message=itch-scraper&color=brightgreen&url=https://www.npmjs.com/package/itch-scraper

# Installation

npm:

```
npm install --save itch-scraper
```

You don't need the --save flag for npm versions 5.0.0 and above

yarn:

```
yarn add itch-scraper
```

---

Import it in your project as

```js
const scraper = require('itch-scraper');
```

# Usage

> Every method must be surronded by a try-catch, or ended with .catch() on async methods

```js
const scraper = require('itch-scraper');

let scrape = async url => {
  try {
    /*
    Game methods
    These only work on itch.io game links
    All methods are async
    */
    let game = await scraper.getGame(url);                                 // Get all available game details
    let gameTitle = await scraper.getGameTitle(url);                       // Get the title of the game
    let gameDescription = await scraper.getGameDescription(url);           // Get the game description
    let gameScreenshots = await scraper.getGameScreenshots(url);           // Get the urls of screenshots uploaded by the author. Empty array if none
    /*
    Author methods
    These work on both itch.io game and user links
    All methods except getAuthorUrl() or getAuthorUser() are async
    */
    let author = await scraper.getAuthor(url);                             // Get all available author details
    let authorName = await scraper.getAuthorName(url);                     // Get the name of the author. Might be different from their username
    let authorUrl = scraper.getAuthorUrl(url);                             // Get the url of author's page
    let authorUser = scraper.getAuthorUser(url);                           // Get the unique username of author
    let authorBio = await scraper.getAuthorBio(url);                       // Get the bio/description/intro of the author
    let authorGames = await scraper.getAuthorGames(url);                   // Get the urls of all games uploaded by the author
    let authorSocialLinks = await scraper.getAuthorSocialLinks(url);       // Get the social media links posted by the author on their homepage
  } catch (err) {
    console.log(err);
  }
};
```

Methods can also be imported and used singularly

```js
//To get the game and author name
const { getGameTitle, getAuthorName } = require('itch-scraper');

const getGameAndAuthor = async link => {
  const gameTitle = await getGameTitle(link);
  const author = await getAuthorName(link);
  console.log(`Game:${gameTitle} by ${author}`);
}

getGameAndAuthor('https://danqzq.itch.io/hellgrinder');
```

`Game:HELLGRINDER by Danial Jumagaliyev`

# Bugs and Improvements

If you encounter any kind of bug, feel free to [open an issue](https://github.com/DeathVenom54/itch-scraper/issues) or post about it in the [Discord server](https://discord.gg/ZRBxHc2SDb). Bug reports should be described properly and accompanied with the error message(s) if any, and the reproduction steps/the code which triggered the problem.

# Versions

You can see the version history and changelog [here](https://github.com/DeathVenom54/itch-scraper/releases)

