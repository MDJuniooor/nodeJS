const crypto = require("crypto");
crypto.randomBytes(64, (err, buf) => {
  const salt = buf.toString("base64");
  console.time('암호화');
  crypto.pbkdf2('대성이짱짱맨',salt, 600000, 64, 'sha512', (err, key) => {
      console.log('password', key.toString('base64'));
      console.timeEnd('암호화');
    });

});
