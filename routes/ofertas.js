var express = require("express");
var router = express.Router();
const db = require("../model/helper");

/* GET ofertas listing. */
router.get("/", function (req, res) {
  let { orden, contrato, sector } = req.query;
  let contratoQuery = "";
  let sectorQuery = "";

  // Si hi ha sector, hem de convertir l'array en llistat de strings
  if (sector) {
    let sectorsArray = sector.toString().split(",");
    sectorsArray.map((e) => {
      sectorsArray.indexOf(e) === sectorsArray.length - 1
        ? (sectorQuery += '"' + e + '"')
        : (sectorQuery += '"' + e + '",');
    });
  }

  // Si hi ha contracte, hem de convertir l'array en llistat de strings
  if (contrato) {
    let contratoArray = contrato.toString().split(",");
    contratoArray.map((e) => {
      contratoArray.indexOf(e) === contratoArray.length - 1
        ? (contratoQuery += '"' + e + '"')
        : (contratoQuery += '"' + e + '",');
    });
  }

  // Si no hi ha ni orden / contrato / sector
  let query = "SELECT * FROM ofertas ORDER BY id;";

  // Si hi ha sector filtrar per sector
  if (sector) {
    // Si, a més a més, hi ha contracte filtrar per contracte (que també haurem de convertit en llistat de strings)
    contrato
      ? (query = `SELECT * FROM ofertas WHERE sector IN (${sectorQuery}) AND contrato IN (${contratoQuery}) ORDER BY "${orden}";`)
      : (query = `SELECT * FROM ofertas WHERE sector IN (${sectorQuery}) ORDER BY "${orden}";`);
  } else if (contrato) {
    // Si només hi ha filtre de contracte. Haurem d'afegir la mateixa lògica per fer llistat de strings
    query = `SELECT * FROM ofertas WHERE contrato IN (${contratoQuery}) ORDER BY "${orden}";`;
  } else if (orden) {
    query = `SELECT * FROM ofertas ORDER BY ${orden};`;
  }

  console.log(query);

  db(query)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

module.exports = router;

//! CODI BUTI
// let sectorsArray = sector.toString().split(",");
// let sectorQuery = "";
// for (let i = 0; i < sectorsArray.length; i++) {
//   sectorQuery += '"' + sectorsArray[i] + '"';
//   if (i != sectorsArray.length - 1) {
//     sectorQuery += ",";
//   }
// }
