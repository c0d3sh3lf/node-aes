const fs = require('fs');
const crypto = require('crypto');

const iv = crypto.randomBytes(16);
fs.writeFileSync('iv.bin', iv);
console.log("Initialization vector written to file 'iv.bin'.");