import { BrowserRouter as Router, Link } from "react-router-dom";
import React, { Component } from "react";
import "./home_header.css";
import "../../App.css";

export default class home_header extends Component {
  render() {
    return (
      <div className="home_header">
        <div className="home_header_box">
          <div className="title2thin">
            PORTAL DE EMPLEO MÁS
            <span className="font-italic font-weight-bold">TRENDING </span>
            PARA INGNIEROS
          </div>
          <div className="title3thin">Las mejores ofertas de ingeniería.</div>
          <div className="subtitle1">
            Buscamos entre cientos de ofertas en ingenieria para encontrar tu
            empleo ideal
          </div>
          <button className="buttonW">
            <Link
              to="/register"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              REGÍSTRATE
            </Link>
          </button>
        </div>
      </div>
    );
  }
}
