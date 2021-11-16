export type linkType = 'game' | 'author';

const gameRegex = /^https:\/\/[\w-]+\.itch\.io\/[\w-]+\/?$/;
const authorRegex = /^https:\/\/[\w-]+\.itch\.io\/?$/;

export const checkLink = (link: string, type: linkType) => {
  if (type === 'game') return gameRegex.test(link);
  else if (type === 'author') return authorRegex.test(link);
};
