const fs = require('fs');
fs.readFile('./readme.txt', (err, data)=> {
    if(err){
        throw err;
    }
    console.log(data); // buffer 로 읽음
    console.log(data.toString());
});
