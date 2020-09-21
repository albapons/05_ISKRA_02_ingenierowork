var express = require("express");
var router = express.Router();
const db = require("../model/helper");

// GET apartment filtered list by place
// router.get("/", function (req, res, next) {
//   const { place } = req.query;
//   let query = "";
//   if (place)
//     query = `SELECT * FROM apartments WHERE location LIKE "%${place}%";`;
//   else query = `SELECT * FROM apartments;`;
//   db(query)
//     .then((results) => {
//       res.send(results.data);
//     })
//     .catch((err) => res.status(500).send(err));
// });

/* GET ofertas listing. */
router.get("/", function (req, res) {
  const { orden, contrato, sector } = req.query;
  console.log(`orden is ${orden}`);
  console.log(`contrato is ${contrato}`);
  console.log(`sector is ${sector}`);

  // if contrato and sector exists
  // if only contrato exists
  // if only sector exists

  // let query = "";
  // if (orden) query = `SELECT * FROM ofertas ORDER BY ${orden};`;
  // else query = `SELECT * FROM ofertas ORDER BY id;`;
  // db(query)
  //   .then((results) => {
  //     res.send(results.data);
  //   })
  //   .catch((err) => res.status(500).send(err));

  if (orden) {
    db(`SELECT * FROM ofertas ORDER BY ${orden};`);
  } else {
    db(`SELECT * FROM ofertas ORDER BY id;`)
      .then((results) => {
        res.send(results.data);
      })
      .catch((err) => res.status(500).send(err));
  }
});

module.exports = router;
