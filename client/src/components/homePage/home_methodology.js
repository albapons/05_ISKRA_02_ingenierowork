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
              title={"Evaluación"}
              text={
                "Evaluamos los ingenieros según su afinidad con tu oferta. En todo momento puedes ver los resultados."
              }
              img={"images/ICONOS/EVALUACION_EMPRESA.svg"}
            />
            <Feature
              title={"Acceso a perfiles"}
              text={
                "Puedes acceder en todo momento a la información de cada uno de los candidatos."
              }
              img={"images/ICONOS/PERFILES.svg"}
            />
            <Feature
              title={"Confianza"}
              text={
                "Muchas de las mejores empresas ya han confiado en nosotros y han encontrado al ingeniero que estaban buscando."
              }
              img={"images/ICONOS/CONFIANZA.svg"}
            />
            <Feature
              title={"Siempre disponible"}
              text={
                "Con nuestra app puedes consultar las novedades de tu oferta en cualquier momento."
              }
              img={"images/ICONOS/CONFIANZA.svg"}
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
