import { BrowserRouter as Router, Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import React, { Component } from "react";
import "./footer.css";
import "../../App.css";

export default class footer extends Component {
  topFunction = () => {
    // When the user clicks on the button, scroll to the top of the document
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  render() {
    return (
      <div className="footer">
        <ReactSVG
          alt="Error"
          src="/images/LOGO_FOOTER.svg"
          className="py-3"
        ></ReactSVG>
        <div className="blue my-3">
          <i className="fab fa-twitter fa-2x mr-3" />
          <i className="fab fa-linkedin-in fa-2x ml-2" />
        </div>
        <div className="column blue py-3 subtitle1">
          <div>
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="ofertas"
            >
              Muro de ofertas
            </Link>
          </div>
          <span className="separate font-weight-bold">|</span>
          <div>
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="especiales"
            >
              ¿Qué nos hace mejores?
            </Link>
          </div>
          <span className="separate font-weight-bold">|</span>
          <div>Sobre IngenieroWork</div>
          <span className="separate font-weight-bold">|</span>
          <div>
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="contacto"
            >
              Contactar
            </Link>
          </div>
        </div>

        <div className="column subtitle1 underlined py-3">
          <div>Política de cookies</div>
          <div>Terminos y condiciones</div>
          <div>Política de privacidad</div>
        </div>
        <div className="subtitle2 text-center py-3 px-0">
          Copyright © 2020 Tell us wing SL. Todos los derechos reservados.
        </div>
        <div className="col d-flex justify-content-center">
          <button
            className="buttonWR"
            onClick={(e) => this.topFunction()}
            id="myBtn"
          >
            <i className="fas fa-chevron-up fa-2x" />
          </button>
        </div>
      </div>
    );
  }
}
