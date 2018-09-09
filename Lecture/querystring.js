const url = require('url');
const querystring = require('querystring');

const paresdUrl = url.parse(
    "http://www.ssodam.com/board/4/1?field=title&q=%EA%B2%BD%EC%98%81"
);

const query = querystring.parse(paresdUrl.query);
console.log('querystring.parse():', query);
console.log("querystring.stringify():", querystring.stringify(query));
