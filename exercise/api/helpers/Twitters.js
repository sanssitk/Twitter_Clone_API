const axios = require("axios");
require("dotenv").config();

const URL = "https://api.twitter.com/1.1/search/tweets.json";
const bearerToken = process.env.BEARER_TOKEN;
const apiKey = process.env.TWIITER_APP_API_KEYS;
const apiSecretKehy = process.env.TWIITER_APP_API_SECRET_KEY;

class Twitter {
  get(q, count, maxId) {
    return axios.get(URL, {
      params: {
        q: q,
        count: count,
        tweet_mode: "extended",
        max_id: maxId
      },
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });
  }
}

module.exports = Twitter;
