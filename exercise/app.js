const express = require("express");
const app = express();
const port = process.env.port || 3000 ;

// middleware to convert json to javascript objects
app.use(express.json());

// Middleware to allow access-control
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

const Twitter = require("./api/helpers/Twitters");
const twitter = new Twitter();

app.get("/tweets", (req, res) => {
  const q = req.query.q;
  const count = req.query.count;
  const maxId = req.query.max_id;

  twitter
    .get(q, count, maxId)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.listen(port, () => {
  console.log(`Listening on localhost:${port}`);
});
