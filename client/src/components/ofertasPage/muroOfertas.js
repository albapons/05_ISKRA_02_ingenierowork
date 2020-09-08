import React, { useEffect, useState } from "react";
import api from "../utils/api/api";
import "./ofertas.css";

export default function Ofertas({ baseDades }) {
  let [newBaseDades, setNewBaseDades] = useState([]);
  let [orden, setOrden] = useState("");

  useEffect(() => {
    getList(orden);
  }, [orden]);

  const getList = () => {
    api.getList().then((response) => {
      // console.log(response.data);
      setNewBaseDades(response.data);
    });
  };

  const ordenar = (e) => {
    setOrden(e.target.value);
    console.log(`Orden in the frontend is ${orden}`);
    console.log(typeof orden); // Empty string
    getList(orden);
  };

  return (
    <div className="ofertas">
      {/* {console.log(orden)} */}
      <div className="resultados">
        <div className="row subtitle1">
          <div className="col">
            <div className="title5 blue">OFERTAS</div>
            <div>{baseDades.length} Ofertas de empleo</div>
          </div>
          <div className="col">
            <div>Ordenar por:</div>
            {/*//! l'onChange no s'executa quan cliquem marcar todas */}
            <select id="setBy" name="setBy" onChange={(e) => ordenar(e)}>
              <option value="defaultValue" defaultValue>
                Selecciona...
              </option>
              <option value="publicación">Fecha de publicación</option>
              <option value="finalización">Fecha de finalización</option>
            </select>
          </div>
        </div>

        {newBaseDades.map((e) => (
          <div className="oferta" key={e.id}>
            <div className="row">
              <div className="col">
                <div className="title3 blue">{e.puesto}</div>
                <div className="font-weight-bold subtitle2">{e.lugar}</div>
              </div>
              <div className="col d-flex align-items-center justify-content-end">
                <button className="buttonBsmall">VER OFERTA</button>
              </div>
            </div>
            <div className="row opciones subtitle2 px-4 pt-3">
              <div className="my-2">
                <i className="far fa-calendar-alt mr-2" />
                Publicada:
                <strong> {e.publicación.split("-").reverse().join("-")}</strong>
              </div>
              <div className="my-2">
                <i className="far fa-calendar-alt mr-2" />
                Finaliza:
                <strong>
                  {" "}
                  {e.finalización.split("-").reverse().join("-")}
                </strong>
              </div>
              <div className="my-2">
                <i className="far fa-file-alt mr-2" /> Tipo de contrato:
                <strong> {e.contrato}</strong>
              </div>
            </div>
            <div className="row p-4 subtitle1 text-justify">
              {e.descripción}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
