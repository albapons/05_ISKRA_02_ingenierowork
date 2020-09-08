import { BrowserRouter as Router, Link } from "react-router-dom";
import React, { Component } from "react";
import Feature from "../utils/feature";
import "./home_especiales.css";
import "../../App.css";

export default class home_especiales extends Component {
  render() {
    return (
      <div>
        {/* MOBILE */}
        <div className="home_especiales_mobile">
          <div className="home_especiales">
            <div className="home_especiales_box">
              <div className="title1 blue mb-3">¿QUÉ NOS HACE ESPECIALES?</div>
              <div>
                Estamos especializados en ingenieria, contamos con más de medio
                millón de ingenieros en las redes sociales de la última década
                en el grupo.
              </div>
              <div className="text-center">
                <button className="buttonBsmall mt-5">
                  <Link
                    to="/ofertas"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    VER OFERTAS
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="features text-center">
            <Feature
              img={"images/ICONOS/AHORRA_TIEMPO.svg"}
              title={"Ahorra tiempo"}
              text={
                "Tú nos facilitas tus datos y nosotros trabajamos para ti encontrándote las mejores ofertas."
              }
            />
            <Feature
              img={"images/ICONOS/PRECISO.svg"}
              title={"Preciso"}
              text={
                "IngenieroWork te permite organizar las ofertas haciendo que buscar dentro del listado de estas sea más fácil y rápido."
              }
            />
            <Feature
              img={"images/ICONOS/CUESTIONARIO.svg"}
              title={"Cuestionario"}
              text={
                "Puedes responder a cuestionarios dentro de las ofertas y así demostrar tus conociemientos de forma más exacta."
              }
            />
            <Feature
              img={"images/ICONOS/AFINIDAD-PERFILES.svg"}
              title={"Afinidad"}
              text={
                "Buscamos entre todas las ofertas basandonos en tu perfil y te mostramos las que más pueden interesarte."
              }
            />
            <Feature
              img={"images/ICONOS/CONFIANZA.svg"}
              title={"Confianza"}
              text={
                "Muchos ingenieros han confiado en nosotros y han encontrado el puesto de trabajo que estaban buscando."
              }
            />
            <Feature
              img={"images/ICONOS/SIEMPRE_DISPONIBLES.svg"}
              title={"Siempre disponible"}
              text={
                "Ante cualquier duda, siempre estamos disponible en todos nuestros canales de comunicación."
              }
            />
          </div>
        </div>

        {/* DESKTOP */}
        <div className="home_especiales_desktop">
          <div className="home_especiales">
            <div className="home_especiales_box">
              <div className="title1 blue">¿QUÉ NOS HACE ESPECIALES?</div>
              <div>
                Estamos especializados en ingenieria, contamos con más de medio
                millón de ingenieros en las redes sociales de la última década
                en el grupo.
              </div>
              <div className="features text-center">
                <Feature
                  img={"images/ICONOS/AHORRA_TIEMPO.svg"}
                  title={"Ahorra tiempo"}
                  text={
                    "Tú nos facilitas tus datos y nosotros trabajamos para ti encontrándote las mejores ofertas."
                  }
                />
                <Feature
                  img={"images/ICONOS/PRECISO.svg"}
                  title={"Preciso"}
                  text={
                    "IngenieroWork te permite organizar las ofertas haciendo que buscar dentro del listado de estas sea más fácil y rápido."
                  }
                />
                <Feature
                  img={"images/ICONOS/CUESTIONARIO.svg"}
                  title={"Cuestionario"}
                  text={
                    "Puedes responder a cuestionarios dentro de las ofertas y así demostrar tus conociemientos de forma más exacta."
                  }
                />
                <Feature
                  img={"images/ICONOS/AFINIDAD-PERFILES.svg"}
                  title={"Afinidad"}
                  text={
                    "Buscamos entre todas las ofertas basandonos en tu perfil y te mostramos las que más pueden interesarte."
                  }
                />
                <Feature
                  img={"images/ICONOS/CONFIANZA.svg"}
                  title={"Confianza"}
                  text={
                    "Muchos ingenieros han confiado en nosotros y han encontrado el puesto de trabajo que estaban buscando."
                  }
                />
                <Feature
                  img={"images/ICONOS/SIEMPRE_DISPONIBLES.svg"}
                  title={"Siempre disponible"}
                  text={
                    "Ante cualquier duda, siempre estamos disponible en todos nuestros canales de comunicación."
                  }
                />
              </div>
              <div>
                <button className="buttonBsmall ml-4">
                  <Link
                    to="/ofertas"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    VER OFERTAS
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
