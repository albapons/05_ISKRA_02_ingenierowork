var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
// var userShouldBeLoggedIn = require("../guards/userShoudBeLoggedIn");
const db = require("../model/helper");
require("dotenv").config();
const supersecret = process.env.SUPER_SECRET;

// GET all users
const getUsers = (req, res) => {
  db(`SELECT * FROM users;`)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
};
router.get("/", getUsers);

// REGISTER a new user into the DB
router.post("/", function (req, res, next) {
  const { email, password } = req.body;
  // El usuario existe?
  db(`SELECT * FROM users WHERE email = "${email}";`).then((results) => {
    // Si ya existe, enviar mensaje
    if (results.data.length) {
      res.send({ msg: "¡Usuario ya registrado!" });
    } else {
      // Si no existe, crear usuario
      db(
        `INSERT INTO users (email, password) VALUES ( "${email}", "${password}");`
      )
        .then(() => {
          res.send({
            msg: "¡Cuenta creada correctamente, ya puedes iniciar tu sesión!",
          });
        })
        .catch((err) => res.status(500).send(err));
    }
  });
});

// LOGIN
router.post("/login", function (req, res, next) {
  const { email, password } = req.body;
  db(
    `SELECT * FROM users WHERE email = "${email}" AND password = "${password}";`
  ).then((results) => {
    if (results.data.length) {
      console.log("Yes the user is found");
      var token = jwt.sign({ userId: results.data[0].id }, supersecret);
      console.log("User OK, here is your token" + token);
      res.send({ msg: "¡Bienvenido!" });
    } else {
      res.status(404).send({ msg: "User not found!" });
    }
  });
});

module.exports = router;
