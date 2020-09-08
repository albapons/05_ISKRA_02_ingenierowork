import { BrowserRouter as Router, Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import React, { Component } from "react";
import SocialMediaButtons from "./socialMediaButtons";
import "./navBar.css";
import "../../App.css";
// import { ReactComponent as LOGO_HEADER } from "../../images/LOGO_HEADER.svg";

export default class navBar extends Component {
  render() {
    return (
      <div>
        <div className="navBarForMobile">
          <div className="navBar1">
            <Link
              to="/home"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <ReactSVG alt="Error" src="/images/LOGO_HEADER.svg" />
            </Link>

            <div className="dropdown">
              <i className="fas fa-bars fa-3x" />
              <div className="dropdown-content">
                <Link
                  to="/especiales"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  <div className="subtitle1">¿Qué nos hace especiales?</div>
                </Link>
                <Link
                  to="/ofertas"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  <div className="subtitle1">Muro de Ofertas </div>
                </Link>
                <Link
                  to="/empresas"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  <div className="subtitle1">Empresas </div>
                </Link>
                <Link
                  to="/"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  <div className="subtitle1">Contacto </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="navBar2">
            <div className="px-2 font-weight-bold">
              <Link
                to="/login"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                Inicio de sesión
              </Link>
            </div>
            <div className="px-2 font-weight-bold">
              <Link
                to="/empresas"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                Soy una empresa
              </Link>
            </div>
          </div>
        </div>

        <div className="navBarForDesktop">
          <div className="navBar1">
            <div className="col">
              <Link
                to="/home"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <ReactSVG
                  className="py-3"
                  alt="Error"
                  src="/images/LOGO_HEADER.svg"
                />
              </Link>
            </div>
            <div className="col">
              <div className="row d-flex justify-content-end py-2">
                <SocialMediaButtons />
              </div>
              <div className="grupPestanyes">
                <div className="pestanya subtitle">
                  <Link
                    to="/login"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    Inicio de sesión
                  </Link>
                </div>
                <div className="pestanya subtitle">
                  <Link
                    to="/empresas"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    Soy una empresa
                  </Link>
                </div>
                <div className="pestanya bgBlue">
                  <Link
                    to="/register"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    REGÍSTRATE
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="navBar2">
            <div className="px-5 font-weight-bold">
              <Link
                to="/ofertas"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                Muro de ofertas
              </Link>
            </div>
            <div className="px-5 font-weight-bold">
              <Link
                to="/especiales"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                ¿Qué nos hace especiales?
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
