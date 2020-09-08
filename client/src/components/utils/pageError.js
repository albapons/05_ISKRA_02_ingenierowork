import { BrowserRouter as Router, Link } from "react-router-dom";
import React, { Component } from "react";
import "../../App.css";
export default class pageError extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          alt="Error"
          src="https://image.freepik.com/vector-gratis/error-pagina-404-no-encontrado-alien-tres-ojos-llego-cohete_138353-31.jpg"
          className="text-center"
        />
        <h1 className="title1 text-center blue">PAGE NOT FOUND</h1>
        <button className="buttonB">
          <Link
            to="/home"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            Go Home!
          </Link>
        </button>
      </div>
    );
  }
}
