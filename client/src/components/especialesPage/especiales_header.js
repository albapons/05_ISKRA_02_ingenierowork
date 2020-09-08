import { BrowserRouter as Router, Link } from "react-router-dom";
import React, { Component } from "react";
import "./especiales_header.css";
import "../../App.css";

export default class especiales_header extends Component {
  render() {
    return (
      <div className="especiales_header">
        <div className="especiales_header-box">
          <Router>
            <div className="title2thin">
              LO QUE NOS HACE
              <span className="font-italic font-weight-bold"> ESPECIALES</span>
            </div>
            <div className="subtitle1">
              Ahorra tiempo y dinero en la elección de nuevos ingenieros gracias
              a la selección inteligente.
            </div>
            <button className="buttonW">
              <Link
                to="/login"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                CREAR OFERTA
              </Link>
            </button>
          </Router>
        </div>
      </div>
    );
  }
}
