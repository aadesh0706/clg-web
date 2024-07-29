const crypto = require('crypto');
const secret = crypto.randomBytes(64).toString('hex');
console.log(secret);
// 1dfa49309adde89e52945c421441ec32e3f0a16d17c1bea7efad1d5b55c913eac102ce66ef32dbd7963f8d6e90f213ff10f00b06501397e7490c77c06a139608