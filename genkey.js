const fs = require('fs');
const crypto = require('crypto');

const key = crypto.randomBytes(32);
fs.writeFileSync('key.bin', key);
console.log("AES-256 encryption/decryption key written to file 'key.bin'.");