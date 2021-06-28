const axios = require("axios");
require("dotenv").config();

const URL = "https://api.twitter.com/2/tweets/search/recent";
//   const urlall = "https://api.twitter.com/2/tweets/search/all";
// https://api.twitter.com/2/tweets/search/recent?query=snow&max_results=50&tweet.fields=id,created_at,author_id,text,source,entities,attachments&user.fields=id,name,username,description
const bearerToken = process.env.BEARER_TOKEN;
const apiKey = process.env.TWIITER_APP_API_KEYS;
const apiSecretKehy = process.env.TWIITER_APP_API_SECRET_KEY;

class Twitter {
  get(query, max_results) {
    return axios
      .get(URL, {
        params: {
          query: query,
          max_results: max_results,
        },
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      })
  }
}

module.exports = Twitter;
