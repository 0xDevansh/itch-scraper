[![npm](https://img.shields.io/npm/v/itch-scraper)](https://www.npmjs.com/package/itch-scraper)
![NPM Downloads](https://img.shields.io/npm/dw/itch-scraper)

## About this package

itch-scraper can be used to scrape information like game title, description, author details, etc from itch.io pages and return it in a usable form in javascript or typescript. I made this package because there is no official api available for getting information from itch, and web scraping with node.js is rather cumbersome.

This package depends upon [jsdom](https://www.npmjs.com/package/jsdom) for emulating javascript running in the browser and parsing data from the dom.

## Installation

npm:

```
npm install itch-scraper
```

yarn:

```
yarn add itch-scraper
```

## Usage

```js
const scraper = require('itch-scraper');

let scrape = async url => {
  try {
    /*
    Game methods
    These only work on itch.io game links
    All methods are async
    */
    let game = await scraper.getGame(url);                           // Get all available game details
    let gameTitle = await scraper.getGameTitle(url);                 // Get the title of the game
    let gameDescription = await scraper.getGameDescription(url);     // Get the game description
    let gameScreenshots = await scraper.getGameScreenshots(url);     // Get the urls of screenshots uploaded by the author. Empty array if none
    /*
    Author methods
    These work on both itch.io game and user links
    All methods except getAuthorUrl() or getAuthorUser() are async
    */
    let author = await scraper.getAuthor(url);                       // Get all available author details
    let authorName = await scraper.getAuthorName(url);               // Get the name of the author. Might be different from their username
    let authorUrl = scraper.getAuthorUrl(url);                       // Get the url of author's page
    let authorUser = scraper.getAuthorUser(url);                     // Get the unique username of author
    let authorBio = await scraper.getAuthorBio(url);                 // Get the bio/description/intro of the author
    let authorGames = await scraper.getAuthorGames(url);             // Get the urls of all games uploaded by the author
    let authorSocialLinks = await scraper.getAuthorSocialLinks(url); // Get the social media links posted by the author on their homepage
  } catch (err) {
    console.log(err);
  }
};
```

If you log the `game` variable to the console, it will look like this:

```js
{
  title: 'Solo Inferno',
  description: 'Made by Danial Jumagaliyev.\n' +
    'The theme for the 2nd DevAtlas Jam was - one light source.  In this game, you have to defeat hordes of enemies using a powerful light cannon and mirrors. You can lengthen and change the trajectory of the light from the light cannon using mirrors!\n' +
    'Your goal is to survive as many waves of enemies as you can. Enemies will get stronger and stronger as you progress.\n' +
    "If you reach wave 10, you're gonna have a bad time...\n" +
    'Controls:\n' +
    'WASD or Arrow Keys to rotate the light cannon.Left Mouse Button to click on tiles and buttons."Escape" key to go back to the menu.\n' +
    'Tips (if you get stuck):\n' +
    'Click on the "Start" button on the left-bottom side of the screen to start the wave.Click on tiles to place mirrors!Click on the light cannon to buy upgrades!\n',
  screenshots: [
    'https://img.itch.zone/aW1hZ2UvNzE4MjE3LzM5ODMxNjgucG5n/original/VVVBx7.png',
    'https://img.itch.zone/aW1hZ2UvNzE4MjE3LzM5ODMxNjkucG5n/original/70v6JN.png',
    'https://img.itch.zone/aW1hZ2UvNzE4MjE3LzM5ODMxNjYucG5n/original/VeVeWB.png',
    'https://img.itch.zone/aW1hZ2UvNzE4MjE3LzM5ODMxNjcucG5n/original/Ed%2BaR%2F.png'
  ],
  author: {
    url: 'https://danqzq.itch.io',
    user: 'danqzq',
    name: 'Danial Jumagaliyev',
    bio: 'Hello my name is Danial (you can call me Dan)! I develop websites, bots and different kinds of games. I have been making both 2D and 3D games with Unity for over 4 years.',
    games: [
      'https://danqzq.itch.io/ordinary-pong-with-a-chance-of-mixing-genres',
      'https://danqzq.itch.io/hellgrinder',
      'https://danqzq.itch.io/crimson-crypt',
      'https://danqzq.itch.io/planet-defender',
      'https://danqzq.itch.io/beakers-forest',
      'https://danqzq.itch.io/dimension-loop',
      'https://danqzq.itch.io/solo-inferno',
      'https://danqzq.itch.io/rgb-dungeon',
      'https://danqzq.itch.io/switch',
      'https://danqzq.itch.io/party-time'
    ],
    socialLinks: [
      'https://itch.io/profile/danqzq',
      'https://github.com/danqzq',
      'http://twitter.com/danqzq'
    ]
  }
}
```

All methods can also be imported and used singularly

```js
//To get the game and author name
const { getGameTitle, getAuthorName } = require('itch-scraper');

const getGameAndAuthor = async link => {
  const gameTitle = await getGameTitle(link);
  const author = await getAuthorName(link);
  console.log(`Game:${gameTitle} by ${author}`);
}

getGameAndAuthor('https://danqzq.itch.io/solo-inferno');
```

`Game:Solo Inferno by Danial Jumagaliyev`

## Bugs and Improvements

If you encounter any kind of bug, feel free to [open an issue](https://github.com/DeathVenom54/itch-scraper/issues) or post about it in my [Discord Server](https://discord.gg/qJnrRvt7wW). Bug reports should be described properly and accompanied with the error message(s) if any, and the reproduction steps/the code which triggered the problem.

## Versions

You can see the version history and changelog [here](https://github.com/DeathVenom54/itch-scraper/releases)

