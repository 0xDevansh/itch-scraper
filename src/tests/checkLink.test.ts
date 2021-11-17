import { checkLink } from '../helpers/checkLink';

describe('checkGameLink', () => {
  test('should not throw error', () => {
    try {
      checkLink('https://example.itch.io/example-game', 'game');
    } catch (err) {
      throw new Error("There shouldn't be an error here");
    }
  });

  test('should throw error', () => {
    try {
      checkLink('https://ee.itch.io', 'game');
    } catch (err) {
      const errFunc = () => {
        throw err;
      };

      expect(errFunc).toThrowError(new Error('The url or author/game name provided are malformed'));
    }
  });
});

describe('checkAuthorLink', () => {
  test('should not throw error', () => {
    try {
      checkLink('https://example.itch.io/', 'author');
    } catch (err) {
      throw new Error("There shouldn't be an error here");
    }
  });

  test('should throw error', () => {
    try {
      checkLink('https://ee.itch.io/gameeee', 'game');
    } catch (err) {
      const errFunc = () => {
        throw err;
      };

      expect(errFunc).toThrowError(new Error('The url or author/game name provided are malformed'));
    }
  });
});
