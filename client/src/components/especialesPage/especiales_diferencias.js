import React, { Component } from "react";
import "./especiales_diferencias.css";
import "../../App.css";

export default class especiales_diferencias extends Component {
  render() {
    return (
      <div className="especiales_diferencias">
        <div className="especiales_diferencias_box">
          <div className="header">
            <div className="title2 blue">Nuestro sistema</div>
            <div className="font-weight-bold">
              Ahorra tiempo y dinero en la elección de nuevos ingenieros gracias
              a la selección inteligente.
            </div>
          </div>

          <div className="subtitle1">
            <div className="row py-1">
              <div className="col-1">
                <i className="fas fa-check blue mr-4"></i>
              </div>
              <div className="col-11">
                Publicación de la oferta en el muro público
              </div>
            </div>
            <div className="row py-1">
              <div className="col-1">
                <i className="fas fa-check blue mr-4"></i>
              </div>
              <div className="col-11">
                Selección automática de los ingenieros compatibles con la oferta
              </div>
            </div>
            <div className="row py-1">
              <div className="col-1">
                <i className="fas fa-check blue mr-4"></i>
              </div>
              <div className="col-11">
                Acceso inmediato a la información curricular de los ingenieros
                selecionados
              </div>
            </div>
            <div className="row py-1">
              <div className="col-1">
                <i className="fas fa-check blue mr-4"></i>
              </div>
              <div className="col-11">
                Posibilidad de generar un cuestionario vinculado a la oferta
              </div>
            </div>
            <div className="row py-1">
              <div className="col-1">
                <i className="fas fa-check blue mr-4"></i>
              </div>
              <div className="col-11">
                Puntuación de todos los ingenieros compatibles según sus
                perfiles y cuestionarios
              </div>
            </div>
            <div className="row py-1">
              <div className="col-1">
                <i className="fas fa-check blue mr-4"></i>
              </div>
              <div className="col-11">
                Campaña de notificación a los candidatos que encajen con el
                puesto de trabajo
              </div>
            </div>
          </div>
        </div>

        <div className="especiales_diferencias_box">
          <div className="header">
            <div className="title2 blue">Otros portales</div>
            <div className="font-weight-bold">
              Publica tu oferta de empleo sin la selección inteligente.
            </div>
          </div>
          <div className="subtitle1">
            <div className="row py-1">
              <div className="col-1">
                <i className="fas fa-check blue mr-4"></i>
              </div>
              <div className="col-11">
                Publicación de la oferta en el muro público
              </div>
            </div>
            <div className="row py-1">
              <div className="col-1">
                <i className="fas fa-times text-danger mr-4"></i>
              </div>
              <div className="col-11 text-muted">
                Selección automática de los ingenieros compatibles con la oferta
              </div>
            </div>
            <div className="row py-1">
              <div className="col-1">
                <i className="fas fa-times text-danger mr-4"></i>
              </div>
              <div className="col-11 text-muted">
                Acceso inmediato a la información curricular de los ingenieros
                selecionados
              </div>
            </div>
            <div className="row py-1">
              <div className="col-1">
                <i className="fas fa-times text-danger mr-4"></i>
              </div>
              <div className="col-11 text-muted">
                Posibilidad de generar un cuestionario vinculado a la oferta
              </div>
            </div>
            <div className="row py-1">
              <div className="col-1">
                <i className="fas fa-times text-danger mr-4"></i>
              </div>
              <div className="col-11 text-muted">
                Puntuación de todos los ingenieros compatibles según sus
                perfiles y cuestionarios
              </div>
            </div>
            <div className="row py-1">
              <div className="col-1">
                <i className="fas fa-times text-danger mr-4"></i>
              </div>
              <div className="col-11 text-muted">
                Campaña de notificación a los candidatos que encajen con el
                puesto de trabajo
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
