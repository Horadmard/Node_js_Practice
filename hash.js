
/// ------------------------------------------- Hash function
// const { createHash, timingSafeEqual } = require('crypto');

// function hash(input) {
//     return createHash('sha256').update(input).digest('hex');
// }

// let password = 'Hey-papa!';
// const hash1 = hash(password);
// console.log(hash1);

// password = 'Hey-papa!';
// const hash2 = hash(password);
// console.log(hash2);

// console.log(hash1 == hash2 ? 'good password' : 'password does not match');

/// ------------------------------------------- Salt

// const { scryptSync, randomBytes } = require('crypto');
// const { buffer } = require('stream/consumers');

// function signup(email, password) {
//     const salt = randomBytes(16).toString('hex');
//     const hashedpassword = scryptSync(password, salt, 64);

//     const user = { email, password: `${salt}:${hashedpassword}` }
//     users.push(user);
//     return user
// }

// function login(email, password) {
//     const user = users.find(v => v.email === email);

//     cont[salt, key] = user.password.split(':');
//     const hashedBuffer = scryptSync(password, salt, 64);

//     const keyBuffer = Buffer.form(key, 'hex');
//     const match = timingSafeEqual(hashedBuffer, keyBuffer);

//     if (match) {
//         return 'login success!'
//     } else {
//         return 'login failed!'
//     }

// }

/// ------------------------------------------- Hmac
// const {createHmac} = require('crypto')
// const key = 'super-secret!';
// const massage = 'boo!'

// const hmac = createHmac('sha256', key).update(massage).digest('hex');

// console.log(hmac);

// const key2 = 'other-password';
// const hmac2 = createHmac('sha256', key2).update(massage).digest('hex');

// console.log(hmac2);

/// ------------------------------------------- Ecnryption using aes256

const { createCipheriv, randomBytes, createDecipheriv } = require('crypto');

const massage = 'i love you ♥';
const key = randomBytes(32);
const iv = randomBytes(16);

const cipher = createCipheriv('aes256', key, iv)

/// Encrypt

const encryptrdMassage = cipher.update(massage, 'utf8', 'hex') + cipher.final('hex');
// console.log(encryptrdMassage);

/// Decrypt

const decipher = createDecipheriv('aes256', key, iv);
const decryptedMassage = decipher.update(encryptrdMassage, 'hex', 'utf8') + decipher.final('utf8');

console.log(massage + ' -> ' + encryptrdMassage + ' -> ' + decryptedMassage);

/// ------------------------------------------- Ecnryption public-key

const { generateKeyPareCync } = require('crypto');
const { publicKey, privateKey } = generateKeyPareSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
    }

    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
        // cipher : 'aes-256-cbc'
        // passphrase : 'top secret'
    }


});

console.log(publicKey);
console.log(privateKey);

