import { BrowserRouter as Router, Route } from "react-router-dom";
import { useLocation, useHistory } from "react-router-dom";

import React, { useEffect, useState } from "react";
import Paginate from "./paginate";

import api from "../utils/api/api";
import "./filtros.css";

export default function Ofertas({ filtroSectores, filtroContratos }) {
  let [newBaseDades, setNewBaseDades] = useState([]);
  let [orden, setOrden] = useState();
  const { search } = useLocation("");
  let history = useHistory();

  const getList = (orden) => {
    console.log();
    let sector = filtroSectores.toString().replaceAll(" - ", "-");
    let contrato = filtroContratos.toString();

    // Si hi ha opcions en els dos
    if (sector && contrato) {
      if (orden !== "publicación" && orden !== "finalización") orden = "id";
      history.push(`?orden=${orden}&sector=${sector}&contrato=${contrato}`);

      // Si només hi ha opció al sector
    } else if (sector) {
      if (!orden) orden = "id";
      history.push(`?orden=${orden}&sector=${sector}`);

      // Si només hi ha opció a contrato
    } else if (contrato) {
      if (!orden) orden = "id";
      history.push(`?orden=${orden}&contrato=${contrato}`);

      // Si no hi ha opció seleccionada de contrato ni sector
    } else if (orden && orden !== "id") history.push(`?orden=${orden}`);
    else history.push(`/ofertas`);

    setOrden(orden);

    api.getList(search).then((response) => {
      setNewBaseDades(response.data);
    });
  };

  const ordenar = (e) => {
    if (e.target.value === "defaultValue") {
      return getList("");
    }
    return getList(e.target.value);
  };

  useEffect(() => {
    getList(orden);
  }, [search, filtroSectores, filtroContratos]);

  return (
    <div className="ofertas">
      <Router>
        <div className="resultados">
          <div className="row subtitle1">
            <div className="col">
              <div className="title5 blue">OFERTAS</div>
              <div>{newBaseDades.length} Ofertas de empleo</div>
            </div>
            <div className="col">
              <div>Ordenar por:</div>
              <select id="setBy" name="setBy" onChange={(e) => ordenar(e)}>
                <option value="defaultValue" defaultValue>
                  Selecciona...
                </option>
                <option value="publicación">Fecha de publicación</option>
                <option value="finalización">Fecha de finalización</option>
              </select>
            </div>
          </div>

          <Paginate newBaseDades={newBaseDades} history={history} />
        </div>
      </Router>
    </div>
  );
}
