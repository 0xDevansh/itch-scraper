import { getGameScreenshots, getGameTitle } from '../game';
import { GameInput } from '../helpers/inputs';

const url = 'https://danqzq.itch.io/solo-inferno';
const gameInput = {
  authorName: 'danqzq',
  title: 'solo-inferno',
} as GameInput;

jest.setTimeout(15000);

describe('getGameTitle', () => {
  test('should return "Solo Inferno"', async () => {
    const titleWithUrl = await getGameTitle(url);
    const titleWithInput = await getGameTitle(gameInput);

    expect(titleWithUrl).toBe('Solo Inferno');
    expect(titleWithInput).toBe('Solo Inferno');
  });
});

describe('getGameScreenshots', () => {
  test('should return 4 links', async () => {
    const screenshotsByUrl = await getGameScreenshots(url);
    const screenshotsByInput = await getGameScreenshots(gameInput);
    const returned = [
      'https://img.itch.zone/aW1hZ2UvNzE4MjE3LzM5ODMxNjgucG5n/original/VVVBx7.png',
      'https://img.itch.zone/aW1hZ2UvNzE4MjE3LzM5ODMxNjkucG5n/original/70v6JN.png',
      'https://img.itch.zone/aW1hZ2UvNzE4MjE3LzM5ODMxNjYucG5n/original/VeVeWB.png',
      'https://img.itch.zone/aW1hZ2UvNzE4MjE3LzM5ODMxNjcucG5n/original/Ed%2BaR%2F.png',
    ];

    expect(screenshotsByUrl).toStrictEqual(returned);
    expect(screenshotsByInput).toStrictEqual(returned);
  });
});
