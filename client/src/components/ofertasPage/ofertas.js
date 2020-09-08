import React, { useState, useEffect } from "react";
import baseDades from "../utils/baseDades";
import MuroOfertas from "./muroOfertas";
import "./ofertas.css";

export default function Ofertas() {
  let [options1, setOptions1] = useState(true);
  let [options2, setOptions2] = useState(true);
  let [sectores, setSectores] = useState([]); //! Ho puc eliminar?
  let [contratos, setContratos] = useState([]);
  let [filtroSectores, setFiltroSectores] = useState([]);
  let [filtroContratos, setFiltroContratos] = useState([]);

  // useEffect(() => {}, [baseDades]);

  //* SELECCIONAR TODO
  const seleccionarTodo = (e) => {
    // console.log(e.target.id);
    var checkboxes = document.getElementsByClassName(e.target.id);
    // console.log(checkboxes);
    if (document.getElementById(e.target.id).innerHTML === "Marcar todas") {
      for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].type === "checkbox") {
          checkboxes[i].checked = true;
        }
      }
      document.getElementById(e.target.id).innerHTML = "Desmarcar todas";
    } else if (
      document.getElementById(e.target.id).innerHTML === "Desmarcar todas"
    ) {
      for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].type === "checkbox") {
          checkboxes[i].checked = false;
        }
      }
      document.getElementById(e.target.id).innerHTML = "Marcar todas";
    }
  };

  //* FILTRES
  const filtrarSectores = (e) => {
    e.target.checked
      ? setFiltroSectores([...filtroSectores, e.target.id])
      : setFiltroSectores(
          filtroSectores.filter((item) => item !== e.target.id)
        );
    console.log(filtroSectores);
  };

  const filtrarContratos = (e) => {
    e.target.checked
      ? setFiltroContratos([...filtroContratos, e.target.id])
      : setFiltroContratos(
          filtroContratos.filter((item) => item !== e.target.id)
        );
    console.log(filtroContratos);
  };

  return (
    <div className="ofertas">
      {/* FILTROS */}
      <div className="filtros">
        <div className="title3 blue">PAÍS</div>
        <div>España</div>
        {options1 ? (
          <div className="row d-flex align-items-center pt-3 pl-3">
            <div id="options1" onClick={(e) => setOptions1(false)}>
              <i className="fas fa-sort-down blue" />
            </div>
            <h1 className="title4 blue px-3">INGENIERÍA</h1>
            <h1
              className="subtitle2 blue underlined "
              id="opciones1"
              onClick={(e) => seleccionarTodo(e)}
            >
              Marcar todas
            </h1>
            <div className="subtitle2 opciones" id="opciones1">
              {baseDades.map((e) => {
                if (!sectores.includes(e.sector)) {
                  sectores.push(e.sector);
                }
              })}
              {sectores.sort().map((e) => (
                <div key={e.i} className="opciones1">
                  <input
                    className="opciones1"
                    type="checkbox"
                    id={e}
                    onChange={(e) => filtrarSectores(e)}
                  />
                  <label htmlFor={e} className="ml-3">
                    {e}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="row d-flex align-items-center text-muted pl-3">
            <div id="options1" onClick={(e) => setOptions1(true)}>
              <i className="fas fa-home"></i>
              {/* <i className="fas fa-sort-up text-danger"></i> */}
              {/* //! NO CANVIA */}
            </div>
            <h1 className="title4 px-3">INGENIERÍA</h1>
          </div>
        )}

        {options2 ? (
          <div className="row d-flex align-items-center pt-4 pl-3">
            <div id="options2" onClick={(e) => setOptions2(false)}>
              <i className="fas fa-sort-down blue" />
            </div>
            <h1 className="title4 blue px-3">TIPO DE CONTRATO</h1>
            <h1
              className="subtitle2 blue underlined"
              id="opciones2"
              onClick={(e) => seleccionarTodo(e)}
            >
              Marcar todas
            </h1>

            <div className="subtitle2 opciones">
              {baseDades.map((e) => {
                if (!contratos.includes(e.contrato)) {
                  contratos.push(e.contrato);
                }
              })}
              {contratos.sort().map((e) => (
                <div key={e.i} className="opciones1">
                  <input
                    className="opciones2"
                    type="checkbox"
                    id={e}
                    onChange={(e) => filtrarContratos(e)}
                  />
                  <label htmlFor={e} className="ml-3">
                    {e}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="row d-flex align-items-center text-muted pt-4 pl-3">
            <div id="options2" onClick={(e) => setOptions2(true)}>
              <i className="fas fa-home"></i>
              {/* <i className="fas fa-sort-up text-danger"></i> */}
              {/* //! NO CANVIA */}
            </div>
            <h1 className="title4 px-3">TIPO DE CONTRATO</h1>
          </div>
        )}
      </div>

      {/* OFERTAS */}
      <MuroOfertas
        baseDades={baseDades}
        filtroSectores={filtroSectores}
        filtroContratos={filtroContratos}
      />
    </div>
  );
}
