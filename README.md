# Node AES
Node JS Code to encrypt decrypt text using AES 256 algorithm

### Initial Steps
When cloning the repository or running this code for the first time, ensure to follow the below steps.

1. Generate initialization vector (IV) using below code.
`$ node geniv.js`
2. Generate a random key that shall be used for encryption and decryption.
`$ node genkey.js`

_Ensure that the above is same when encrypting and decrypting the values. If the key and / or initialization vector is changed then the values can only be decrypted with the key and initialization vector that was used to encrypt it._

_The code doesn't store / backup the old keys / IVs. If the key or initialization vector is changed, then the code will not be able to decrypt the values generated with previous keys unless the previous key is added to the file. Every run of the above mentioned files would yield a new IV and key respectively._+

### Encryption
To encrypt a value, please use the below code.
`$ node encrypt.js Sample`
`Encrypted Text: urCm855UsHikvdR5TTVQ7g==`

To encrypt a value that has more than one word, please use the below code.
`$ node encrypt.js "Sample Text"`
`Encrypted Text: B+Fyi+LKlVg86QdriBHhRw==`

### Decryption
To decrypt a value, ensure only base64 format values are passed. As of current version, the tool only supports base64 encoded texts.
`$ node decrypt.js urCm855UsHikvdR5TTVQ7g==`
`Decrypted Text: Sample`

`$ node decrypt.js B+Fyi+LKlVg86QdriBHhRw==`
`Decrypted Text: Sample Text`

### Code
**Code Author**: Sumit Shrivastava ([@invad3rsam](https://twitter.com/invad3rsam))