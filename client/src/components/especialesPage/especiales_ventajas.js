import { BrowserRouter as Router, Link } from "react-router-dom";
import React, { Component } from "react";
import Feature from "../utils/feature";
import "../homePage/home_methodology.css";
import "../../App.css";

export default class especiales_ventajas extends Component {
  render() {
    return (
      <div className="home_methodology text-center">
        <Router>
          <div className="title2 blue">VENTAJAS</div>
          <div>
            IngenieroWork te facilita la búsqueda de ingenieros especializados
            para tu empresa de manera más rápida y eficaz.
          </div>

          <button className="buttonB mb-4">
            <Link
              to="/login"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              CREAR OFERTA
            </Link>
          </button>

          <div className="features">
            <Feature
              title={"Introducción de oferta"}
              text={
                "Gracias a los requisitos introducidos, IngenieroWork selecciona ingenieros que encajen en su puesto."
              }
              img={"images/ICONOS/OFERTA_INTRODUCCION.svg"}
            />
            <Feature
              title={"Accesos a perfiles"}
              text={
                "Tendrás acceso a la información curricular de los candidatos que han sido selecionados."
              }
              img={"images/ICONOS/PERFILES.svg"}
            />
            <Feature
              title={"Evaluación automática"}
              text={
                "Los candidatos serán evaluados automáticamente segun formación, experiencia e idiomas."
              }
              img={"images/ICONOS/EVALUACION.svg"}
            />
            <Feature
              title={"Cuestionario personalizado"}
              text={
                "Dispones de la oportunidad de generar un cuestionario vinculado a la oferta para obtener información adicional de los candidatos."
              }
              img={"images/ICONOS/CUESTIONARIO.svg"}
            />
            <Feature
              title={"Campaña de promoción"}
              text={
                "Todos los candidatos disponibles que encajan en su puesto de trabajo son notificados mediante correo electrónico."
              }
              img={"images/ICONOS/CAMPAÑA_PROMOCION.svg"}
            />
          </div>
        </Router>
      </div>
    );
  }
}
