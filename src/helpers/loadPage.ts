import axios from 'axios';
import * as cheerio from 'cheerio';

export const loadPage = async (url: string) => {
  const page = await axios.get(url).catch((err) => {
    throw new Error(`Error while fetching page: ${err.message}`);
  });

  return cheerio.load(page.data);
};
