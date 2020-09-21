var express = require("express");
var router = express.Router();
const db = require("../model/helper");

/* GET ofertas listing. */
router.get("/", function (req, res) {
  const { orden, contrato, sector } = req.query;
  console.log(`orden is ${orden}`);
  console.log(`contrato is ${contrato}`);
  console.log(`sector is ${sector}`);

  if (orden) {
    db(`SELECT * FROM ofertas ORDER BY ${orden};`)
      .then((results) => {
        res.send(results.data);
      })
      .catch((err) => res.status(500).send(err));
  } else {
    db(`SELECT * FROM ofertas ORDER BY id;`)
      .then((results) => {
        res.send(results.data);
      })
      .catch((err) => res.status(500).send(err));
  }
});

module.exports = router;
