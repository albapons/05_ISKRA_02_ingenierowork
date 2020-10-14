import { BrowserRouter as Router, Link } from "react-router-dom";
import React, { Component } from "react";
import Feature from "../utils/feature";
import "../homePage/home_methodology.css";
import "../../App.css";

export default class empresas_metodologia extends Component {
  render() {
    return (
      <div className="home_methodology text-center">
        <div className="title2 blue">NUESTRA METODOLOGÍA</div>
        <div>
          Encuentra al ingeniero que estás buscando con estos sencillos pasos
        </div>

        <div className="features">
          <Feature
            title={"Crea una oferta"}
            text={
              "Puedes detallar de una forma precisa los requisitos de tu oferta y nosotros buscamos para ti los ingenieros que mejor se apadaten."
            }
            img={"/images/ICONOS/CREAR_OFERTA.svg"}
          />
          <Feature
            title={"Proceso de selección"}
            text={
              "Tu tiempo nos importa, así que filtramos entre todas los ingenieros y encontramos los que encajan con tu oferta."
            }
            img={"/images/ICONOS/SELECCION.svg"}
          />

          <Feature
            title={"Tú eliges"}
            text={
              "La decisión está en tus manos, consulta los perfiles de los ingenieros ya filtrados según su afinidad con tu oferta y elige el idóneo para ti."
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
      </div>
    );
  }
}
