[![npm](https://img.shields.io/npm/v/itch-scraper)](https://www.npmjs.com/package/itch-scraper)
![NPM Downloads](https://img.shields.io/npm/dw/itch-scraper)

## About this package

itch-scraper can be used to scrape information like game title, description, author details, etc from itch.io
pages and return it in a usable form in javascript or typescript. I made this package because there is no official
api available for getting information from itch, and web scraping with node.js is rather cumbersome.

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

```ts
import scraper from 'itch-scraper';

let scrape = async (url: string) => {
  try {
    /*
    Game methods
    These only work on itch.io game links
    All methods are async
    */
    
    const game = await scraper.getGame(url);                           // Get all available game details
    const gameTitle = await scraper.getGameTitle(url);                 // Get the title of the game
    const gameDescription = await scraper.getGameDescription(url);     // Get the game description
    const gameScreenshots = await scraper.getGameScreenshots(url);     // Get the urls of screenshots uploaded by the author. Empty array if none
   
  } catch (err) {
    console.error(err);
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
  ]
}
```

All methods can also be imported and used singularly

```ts
//To get the game and author name
import { getGameTitle, getGameDescription } from 'itch-scraper'

const getTitleAndDescription = async (link: string) => {
  const title = await getGameTitle(link);
  const description = await getGameDescription(link);
  return { title, description }
}

getTitleAndDescription('https://danqzq.itch.io/solo-inferno');
```

```
{
  title: 'Solo Inferno',
  description: 'Game description here...'
}
```

## Bugs and Improvements

If you encounter any kind of bug, feel free to [open an issue](https://github.com/DeathVenom54/itch-scraper/issues) or post about it in my [Discord Server](https://discord.gg/qJnrRvt7wW). Bug reports should be described properly and accompanied with the error message(s) if any, and the reproduction steps/the code which triggered the problem.

## Versions

You can see the version history and changelog [here](https://github.com/DeathVenom54/itch-scraper/releases)

