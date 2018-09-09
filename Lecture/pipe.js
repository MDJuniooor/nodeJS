const fs = require('fs');
const zlib = require('zlib'); // 파일을 압축하는 모듈

const zlibStream = zlib.createGzip();
const readStream = fs.createReadStream('readme4.txt');
const writeStream = fs.createWriteStream('writeme5.txt');
// readStream.pipe(writeStream); // 파일을 복사하는 방법

readStream.pipe(zlibStream).pipe(writeStream);