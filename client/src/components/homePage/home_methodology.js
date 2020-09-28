import { BrowserRouter as Router, Link } from "react-router-dom";
import React, { Component } from "react";
import Feature from "../utils/feature";
import "./home_methodology.css";
import "../../App.css";

export default class home_methodology extends Component {
  render() {
    return (
      <div className="home_methodology text-center">
        <Router>
          <div className="title2 blue">NUESTRA METODOLOGÍA</div>
          <div>
            Encuentra el trabajo de ingenieria que estás buscando con estos
            sencillos pasos
          </div>

          <div className="features">
            <Feature
              title={"Crea tu perfil"}
              text={
                "De forma rapida y sencilla puedes facilitarnos tu información y nosotros buscamos las ofertas de ingenieria que mejor se adaptan a ti."
              }
              img={"images/ICONOS/CREA_TU_PERFIL.svg"}
            />
            <Feature
              title={"Te encontramos ofertas"}
              text={
                "Tu tiempo nos importa, así que filtramos entre todas las ofertas deingenieria y encontramos las que mejor encajan contigo."
              }
              img={"images/ICONOS/OFERTAS.svg"}
            />

            <Feature
              title={"Tú eliges"}
              text={
                "La decisión siempre está en tus manos, escoge las ofertas de ingeniería que te interesen y haz destacar tu perfil ante las empresas."
              }
              img={"images/ICONOS/TU_ELIGES.svg"}
            />
          </div>
          <button className="buttonB">
            <Link
              to="/register"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              REGÍSTRATE
            </Link>
          </button>
        </Router>
      </div>
    );
  }
}
