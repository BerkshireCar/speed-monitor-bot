/**
 * Put your api keys and secrets here
 */
const twitter = {
    appKey: 'TWITTER_APP_KEY',
    appSecret: 'TWITTER_APP_SECRET',
    accessToken: 'TWITTER_ACCESS_TOKEN',
    accessTokenSecret: 'TWITTER_ACCESS_TOKEN_SECRET'
}

const here = {
    apiKey: 'HEREAPIKEY'    
}

/* Hack to work both in mode and in browser */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { twitter, here };
}
