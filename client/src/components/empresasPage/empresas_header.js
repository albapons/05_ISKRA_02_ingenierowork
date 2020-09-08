import { BrowserRouter as Router, Link } from "react-router-dom";
import React, { Component } from "react";
import "./empresas_header.css";
import "../../App.css";

export default class empresas_header extends Component {
  render() {
    return (
      <div className="empresas_header">
        <div className="empresas_header_box">
          <Router>
            <div className="title2thin">
              TE ENCONTRAMOS AL
              <span className="font-weight-bold"> INGENIERO </span>
              QUE BUSCAS
            </div>
            <div className="title3thin">
              Buscamos entre cientos de ingenieros para encontrar al candidato
              ideal
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
      </div>
    );
  }
}
