const fs = require('fs');
const crypto = require('crypto');

function readBinaryFile(filePath){
    return fs.readFileSync(filePath);
}

function decrypt(cipherText, key){
    //Fetch IV from file
    const iv = readBinaryFile("iv.bin");

    //Create cipher instance
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);

    //Encrypt the text
    let decrypted = decipher.update(cipherText, 'base64', 'utf8');
    decrypted += decipher.final('utf8');

    //Return encrypted value
    return decrypted;
}

const key = readBinaryFile('key.bin');
const textToDecrypt = process.argv[2];

if (!textToDecrypt) {
    console.error("Please provide the text to decrypt as a command-line argument in Base64 format.");
    process.exit(1);
}

const decryptedText = decrypt(textToDecrypt, key);
console.log("Decrypted Text:", decryptedText);