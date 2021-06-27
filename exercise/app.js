const express = require("express");
const app = express();
const axios = require("axios");
require("dotenv").config();

const apiKey = process.env.TWIITER_APP_API_KEYS;
const apiSecretKehy = process.env.TWIITER_APP_API_SECRET_KEY;
const bearerToken = process.env.BEARER_TOKEN;

app.get("/tweets", (req, res) => {
  const query = req.query.query;
  console.log(query);
  const max_results = req.query.max_results;
  const url = "https://api.twitter.com/2/tweets/search/recent";
  axios
    .get(url, {
      params: {
        query: query,
        max_results: max_results,
      },
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    })
    .then((res) => {
      res.status(200).send(res.data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });

  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Listening on localhost:3000");
});
