const fs = require('fs');
const crypto = require('crypto');

function readBinaryFile(filePath){
    return fs.readFileSync(filePath);
}

function encrypt(text, key){
    //Fetch IV from file
    const iv = readBinaryFile("iv.bin");

    //Create cipher instance
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);

    //Encrypt the text
    let encrypted = cipher.update(text, 'utf8', 'base64');
    encrypted += cipher.final('base64');

    //Return encrypted value
    return encrypted;
}

const key = readBinaryFile('key.bin');
const textToEncrypt = process.argv[2];

if (!textToEncrypt) {
    console.error("Please provide the text to encrypt as a command-line argument.");
    process.exit(1);
}

const encryptedText = encrypt(textToEncrypt, key);
console.log("Encrypted Text:", encryptedText);