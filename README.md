# Itch Scraper

A scraping tool for extracting information about itch.io games

NOTE: This module is in an early state of development and doesn't contain all the planned functionality at this time. It might also contain some bugs.

### Installation

Using npm:

```
$ npm install --save itch-scraper
```

In node.js:

```js
const scraper = require('itch-scraper');
```

### Usage

Use getDetails("itch.io_link_here") to fetch basic details of a game.

```js
const scraper = require('itch-scraper');

let link = 'https://danqzq.itch.io/hellgrinder';
scraper.getDetails(link)
  .then(game => {
    //do something
    console.log(game);
  })
  .catch(err => {
    console.log(err);
    //do something
  });
```

```js
{
  title: 'HELLGRINDER',
  screenshots: [
    'https://img.itch.zone/aW1hZ2UvNzM2ODAwLzQxMDU2MzYucG5n/original/tueH09.png',
    'https://img.itch.zone/aW1hZ2UvNzM2ODAwLzQxMDU2MzMucG5n/original/WkEdzc.png',
    'https://img.itch.zone/aW1hZ2UvNzM2ODAwLzQxMDU2MzIucG5n/original/q51n90.png',
    'https://img.itch.zone/aW1hZ2UvNzM2ODAwLzQxMDU2MzUucG5n/original/QUjbTh.png',
    'https://img.itch.zone/aW1hZ2UvNzM2ODAwLzQxMDU2MzcucG5n/original/HLM6RP.png',
    'https://img.itch.zone/aW1hZ2UvNzM2ODAwLzQxMDU2MzQucG5n/original/zgyayg.png',
    'https://img.itch.zone/aW1hZ2UvNzM2ODAwLzQxMDU2MzgucG5n/original/Cea7Et.png'
  ],
  author: {
    url: 'https://danqzq.itch.io',
    user: 'danqzq',
    name: 'Danial Jumagaliyev'
  }
}
```

(Note that getDetails is an async function and must be used with .then() or await)

You can also import individual methods, if you need only specific data.

```js
const { getGameTitle } = require('itch-scraper');

let link = 'https://danqzq.itch.io/hellgrinder';
getGameTitle(link)
  .then(title => {
    //do something
    console.log(`The title of the game is ${title}`);
  })
  .catch(err => {
    console.log(err);
    //do something
  });
```

```
The title of the game is HELLGRINDER
```

**All methods must be enclosed in a try-catch block. You can also use .catch() at the end of a method if you're not using await**

### Methods

#### Game Methods

These methods only work on an itch.io game link.

**getDetails("link_here")\***

Gets the details of a game.

**getGameTitle("link_here")\***

Gets the title of the game.

**getGameDescription("link_here")\***

Gets the description of the game. There might be some unexpected result when getting the description of custom gamepages.

**getGameScreenshots("link_here")\***

Gets an array containing the url's of the screenshots of the game. Returns empty array if the author didn't upload any screenshots.

#### Author methods

These methods can work with both itch.io game links and user links.

**getAuthor("link_here")\***

Gets all the available properties of an author.

**getAuthorName("link_here")\***

Gets the name of the author.

**getAuthorUser("link_here")**

Gets the itch username of the author. The username might differ from the author name.

**getAuthorUrl("link_here")**

Gets the url of the author's itch.io page.

**getAuthorBio("link_here")\***

Gets the bio/profile description of the author's itch.io page.

**getAuthorGames("link_here")\***

Gets an array of links to the public games uploaded by the user. Empty is there are no public games uploaded.

**getAuthorSocialLinks("link_here")\***

Gets an array of social media links on the author's page. Empty if there are no links attached.

**\*** This function is async and should be only used with .then() or await.

Note: You can also pass in the user's page url as the link for getAuthorName() and getAuthorUser().

```js
const { getAuthorName } = require('itch-scraper');

let link = 'https://danqzq.itch.io';
const user = getAuthorUser(link);
console.log(`The username is ${user}`); //The username is danialxd
```

### Bugs and Features

If you encounter a bug, feel free to open a new issue at https://github.com/DeathVenom54/itch-scraper/issues. Please give an exxplanation of the bug along with your code and error(s), if any.

If you also want to suggest any features/changes, you can also open an issue for it at https://github.com/DeathVenom54/itch-scraper/issues

### Versions

You can read about older versions and changes at https://github.com/DeathVenom54/itch-scraper/blob/main/CHANGELOG.md
