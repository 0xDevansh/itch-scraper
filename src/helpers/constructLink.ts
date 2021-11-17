import { AuthorInput, GameInput } from './inputs';
import { checkLink } from './checkLink';

/**
 * Construct a game link from the input
 * @param input The game's url or title and author's name
 */
export const constructGameLink = (input: string | GameInput): string => {
  if (typeof input === 'string') {
    checkLink(input, 'game');
    return input;
  }

  const link = `https://${input.authorName}.itch.io/${input.title}`;
  checkLink(link, 'game');
  return link;
};

/**
 * Construct a game link from the input
 * @param input The game's url or title and author's name
 */
export const constructAuthorLink = (input: string | AuthorInput): string => {
  if (typeof input === 'string') {
    checkLink(input, 'author');
    return input;
  }

  const link = `https://${input.name}.itch.io`;
  checkLink(link, 'author');
  return link;
};
