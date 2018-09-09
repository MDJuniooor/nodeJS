const url = require('url');
const URL = url.URL;
const myURL = new URL(
  "https://docs.google.com/forms/d/16zk_DGTiTbYR4Ml9XYzCRj4IPCtpmlgl0eroOVdHZh0/edit#response=ACYDBNiarQnwOAgROX7wDGGB8azbNlZ8J9DVFYmfc3-q4haFoP5RGZ0JGcy6gxI"
);
const parsedurl = url.parse(
  "https://docs.google.com/forms/d/16zk_DGTiTbYR4Ml9XYzCRj4IPCtpmlgl0eroOVdHZh0/edit#response=ACYDBNiarQnwOAgROX7wDGGB8azbNlZ8J9DVFYmfc3-q4haFoP5RGZ0JGcy6gxI"
);
console.log('new URL():', myURL);
console.log('url.format():', url.format(myURL));
console.log('url.parse():',parsedurl);