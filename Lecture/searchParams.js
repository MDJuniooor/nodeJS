const {URL} = require('url');

const myURL = new URL(
  "http://www.ssodam.com/board/4/1?field=title&q=%EA%B2%BD%EC%98%81"
);
console.log('searchParams',myURL.searchParams);