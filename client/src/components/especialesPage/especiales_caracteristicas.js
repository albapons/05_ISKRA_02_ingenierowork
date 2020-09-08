import React, { Component } from "react";
import "./especiales_caracteristicas.css";
import "../homePage/home_methodology.css";
import "../../App.css";

export default class especiales_caracteristicas extends Component {
  render() {
    return (
      <div className="especiales_caracteristicas features">
        <div className="feature">
          <div className="title2">BASE DE DATOS</div>
          <div>
            Disponemos de una amplia base de datos de ingenieros licenciados en
            las mejores universidades.
          </div>
        </div>
        <div className="feature">
          <div className="title2">Confianza de las empresas</div>
          <div>
            Las mejores empresas en el sector confían en nosotros para contratar
            nuevos trabajadores.
          </div>
        </div>
        <div className="feature">
          <div className="title2">Ahorro de tiempo</div>
          <div>
            Los filtros de IngenieroWork ahorran tiempo y esfuerzo en la
            búsqueda de los mejores ingenieros para su nueva vacante.
          </div>
        </div>
      </div>
    );
  }
}
