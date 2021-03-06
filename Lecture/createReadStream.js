const fs = require('fs');

const readStream = fs.createReadStream('./readme3.txt', { highWaterMark: 16 }); // highWaterMark 16바이트 버퍼
const data = [];
readStream.on('data', (chunk) => {
    data.push(chunk);
    console.log('data', chunk, chunk.length);
});

readStream.on("end", () => {
  console.log("end", Buffer.concat(data).toString());
});