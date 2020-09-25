var express = require("express");
var router = express.Router();
const db = require("../model/helper");

/* GET ofertas listing. */
router.get("/", function (req, res) {
  let { orden, contrato, sector } = req.query;
  console.log(`orden is ${orden}`);
  console.log(`contrato is ${contrato}`);
  console.log(`sector is ${sector}`);

  // Si no hi ha ni orden / contrato / sector
  let query = "SELECT * FROM ofertas ORDER BY id;";

  // Si hi ha sector filtrar per sector
  if (sector) {
    // Si hi ha sector, hem de convertir l'array en llistat de
    //! Hem d'aconseguir això: let sectorQuery = `"Naval", "Nuclear"`;

    let sectorQuery = sector;
    // let sectorQuery = sector.split(",");
    // if (sector) console.log(sector.split(","));

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

    // console.log(`sectorQuery is ${sectorQuery}`);

    //! Hem d'aconseguir això:
    // SELECT * FROM ofertas WHERE sector IN ("Naval","Nuclear") ORDER BY "${orden}";
    // SELECT * FROM Customers WHERE City IN ('Paris','London');

    // Si, a més a més, hi ha contracte filtrar per contracte (que també haurem de convertit en llistat de strings)
    contrato
      ? (query = `SELECT * FROM ofertas WHERE sector = "${sectorQuery}" AND contrato = "${contrato}" ORDER BY "${orden}";`)
      : (query = `SELECT * FROM ofertas WHERE sector IN ("${sectorQuery}") ORDER BY "${orden}";`);
  } else if (contrato) {
    // Si només hi ha filtre de contracte. Haurem d'afegir la mateixa lògica per fer llistat de strings
    query = `SELECT * FROM ofertas WHERE contrato = "${contrato}" ORDER BY "${orden}";`;
  } else if (orden) {
    query = `SELECT * FROM ofertas ORDER BY ${orden};`;
  }

  console.log(query);

  db(query)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));

  //! CODI ANTIC
  // if (orden) query = `SELECT * FROM ofertas ORDER BY ${orden};`;
  // else query = `SELECT * FROM ofertas ORDER BY id;`;
  // db(query)
  //   .then((results) => {
  //     res.send(results.data);
  //   })
  //   .catch((err) => res.status(500).send(err));
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
