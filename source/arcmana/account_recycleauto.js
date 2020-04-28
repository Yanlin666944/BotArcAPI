// filename : arcmana/account_recycleauto.js
// author   : TheSnowfield
// date     : 04/11/2020
// common   : recycle an arc account

const TAG = 'arcmana/account_recycleauto.js';

const arcmana_account_recycle = require('./account_recycle');

module.exports = (token) => {
  return new Promise(async (resolve, reject) => {

    // validate data
    if (!ARCPERSISTENT[token])
      return reject(new Error('Invalid token'));

    // recycle the account
    await arcmana_account_recycle(ARCPERSISTENT[token]);
    delete ARCPERSISTENT[token];

    resolve();
  });
}