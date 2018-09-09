const crypto = require("crypto");

const cipher = crypto.createCipher('aes-256-cbc','열쇠');
let result = cipher.update('문대성짱짱맨','utf8','base64'); // utf8 -> base64
result += cipher.final('base64'); // 암호화 마무리
console.log('암호', result);

const decipher = crypto.createDecipher('aes-256-cbc','열쇠');
let result2 = decipher.update(result, 'base64', 'utf8'); // base64 -> utf8
result2 += decipher.final('utf8');
console.log('평문',result2);