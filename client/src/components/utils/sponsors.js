import React, { Component } from "react";
import { ReactSVG } from "react-svg";
import "./sponsors.css";
import "../../App.css";

export default class sponsors extends Component {
  render() {
    return (
      <div className="sponsors">
        <div className="box">
          <ReactSVG
            className="sponsorsLogo"
            alt="Error"
            src="/images/ICONOS/huawei-logo.svg"
          />
          <ReactSVG
            className="sponsorsLogo"
            alt="Error"
            src="/images/ICONOS/Airbus-Logo.svg"
          />
          <ReactSVG
            className="sponsorsLogo"
            alt="Error"
            src="/images/ICONOS/pc-componentes-logo.svg"
          />
          <ReactSVG
            className="sponsorsLogo"
            alt="Error"
            src="/images/ICONOS/Toyota-Logo.svg"
          />
          <ReactSVG
            className="sponsorsLogo"
            alt="Error"
            src="/images/ICONOS/Logo-Santander.svg"
          />
          <ReactSVG
            className="sponsorsLogo"
            alt="Error"
            src="/images/ICONOS/telefonica-logo.svg"
          />
        </div>
        <div className="box">
          <div>EN COLABORACIÓN CON</div>
          <div className="square mx-5"></div>
          <div className="text-center">
            COLEGIO OFICIAL DE INGENIERÍA DE CATALUNYA
          </div>
        </div>
      </div>
    );
  }
}
