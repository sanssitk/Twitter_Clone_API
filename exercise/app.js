const express = require("express");
const app = express();

const Twitter = require("./api/helpers/Twitters");
const twitter = new Twitter();

app.get("/tweets", (req, res) => {
  const query = req.query.query;
  const max_results = req.query.max_results;

  twitter
    .get(query, max_results)
    .then((response) => {
      res.status(200).send(response.data);
    })

    .catch((err) => {
      res.status(400).send(err);
    });
});

app.listen(3000, () => {
  console.log("Listening on localhost:3000");
});
