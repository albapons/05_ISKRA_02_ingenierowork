var express = require("express");
var router = express.Router();
const db = require("../model/helper");

/* GET ofertas listing. */
router.get("/", function (req, res) {
  let { orden, contrato, sector } = req.query;
  console.log(`orden is ${orden}`);
  console.log(`contrato is ${contrato}`);
  console.log(`sector is ${sector}`);
  // sector = sector.split(",");
  if (sector) console.log(sector.split(","));

  // if (orden) query = `SELECT * FROM ofertas ORDER BY "%${orden}%";`;
  // else query = `SELECT * FROM ofertas ORDER BY id;`;
  // db(query)
  //   .then((results) => {
  //     res.send(results.data);
  //   })
  //   .catch((err) => res.status(500).send(err));

  let query = "";
  // Si hi ha sector filtrar per sector
  if (sector) {
    // Si hi ha contracte filtrar per contracte
    let sectorQuery = sector;

    // let sectorQuery = "";
    // sector.map((e) => {
    //   sector.indexOf(e) === sector.length - 1
    //     ? (sectorQuery += e)
    //     : (sectorQuery += e + ", ");
    // });

    // console.log(sector.join('", "'));
    // console.log(`"${sector.join('", "')}"`);
    // console.log(sector.map((v) => `'${v}'`).join(","));
    // var sectorQuery = `"${sector.join('", "')}"`;
    //! Hem d'aconseguir això: let sectorQuery = `"Naval", "Nuclear"`;

    // console.log(`sectorQuery is ${sectorQuery}`);
    contrato
      ? (query = `SELECT * FROM ofertas WHERE sector = "${sectorQuery}" AND contrato = "${contrato}" ORDER BY "${orden}";`)
      : (query = `SELECT * FROM ofertas WHERE sector IN ("${sectorQuery}") ORDER BY "${orden}";`);

    //! Hem d'aconseguir això:
    // SELECT * FROM ofertas WHERE sector IN ("Naval","Nuclear") ORDER BY "${orden}";

    // SELECT * FROM Customers
    // WHERE City IN ('Paris','London');
  } else if (contrato) {
    query = `SELECT * FROM ofertas WHERE contrato = "${contrato}" ORDER BY "${orden}";`;
  } else {
    query = `SELECT * FROM ofertas ORDER BY "${orden}";`;
  }

  console.log(query);

  db(query)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

module.exports = router;

//TODO EXAMPLES
// GET apartment filtered list by place
// router.get("/", function (req, res, next) {
//   const { place } = req.query;
//   let query = "";
//   if (place)
//     query = `SELECT * FROM apartments WHERE location LIKE "%"%${place}%";`;
//   else query = `SELECT * FROM apartments;`;
//   db(query)
//     .then((results) => {
//       res.send(results.data);
//     })
//     .catch((err) => res.status(500).send(err));
// });
