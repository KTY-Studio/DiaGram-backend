var crypto = require('crypto');

// reference: https://ciphertrick.com/2016/01/18/salt-hash-passwords-using-nodejs-crypto/
function sha512(password, salt) {
    var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
    hash.update(password);
    return hash.digest('hex');
}

module.exports = {
    sha512,
};
