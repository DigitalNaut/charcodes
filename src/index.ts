import fs from 'fs';
import { getChars } from './charSet.js';

const chars = getChars();
fs.writeFile('output.txt', chars, (err) => {
  if (err) throw err;
  console.log('Charset saved!');
});
