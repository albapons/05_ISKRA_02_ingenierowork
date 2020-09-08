var express = require("express");
var router = express.Router();
const db = require("../model/helper");

/* GET ofertas listing. */
router.get("/", function (req, res) {
  const { orden } = req.params;
  console.log(`orden is ${orden}`);
  if (orden) {
    db(`SELECT * FROM ofertas ORDER BY publicación;`)
      .then((results) => {
        res.send(results.data);
        console.log("orden existe");
      })
      .catch((err) => res.status(500).send(err));
  } else {
    db(`SELECT * FROM ofertas ORDER BY id;`)
      .then((results) => {
        res.send(results.data);
        console.log("orden NO existe");
      })
      .catch((err) => res.status(500).send(err));
  }
});

module.exports = router;
