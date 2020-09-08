import React, { useEffect, useState } from "react";
import api from "../utils/api/api";
import "./ofertas.css";

export default function Ofertas({
  baseDades,
  filtroSectores,
  filtroContratos,
}) {
  let [orden, setOrden] = useState("");
  let [newBaseDades, setNewBaseDades] = useState([]);

  // NO NECESSARI
  // useEffect(() => {}, [orden, baseDades, filtroSectores, filtroContratos]);

  // const filtrarSectores = (e) => {
  //   e.preventDefault();
  //   setNewBaseDades(
  //     baseDades.filter((item) => filtroSectores.includes(item.sector))
  //   );
  //   filtroContratos &&
  //     setNewBaseDades(
  //       newBaseDades.filter((item) => filtroContratos.includes(item.contrato))
  //     );
  //   console.log(newBaseDades);
  // };
  // const filtrarContratos = (e) => {
  //   e.preventDefault();
  //   setNewBaseDades(
  //     newBaseDades.filter((item) => filtroContratos.includes(item.contrato))
  //   );
  // };

  const ordenar = (e) => {
    console.log(e);
    const orden = e.target.value;
    console.log(orden);
    // api.getList(orden).then((response) => {
    //   console.log(response.data);
    //   setNewBaseDades(response.data);
    // });

    // setOrden(e.target.value);

    // baseDades.sort(function (a, b) {
    //   if (a[orden] > b[orden]) {
    //     return 1;
    //   }
    //   if (a[orden] < b[orden]) {
    //     return -1;
    //   }
    //   return 0;
    // });
    // console.log(baseDades);

    //! NO FUNCIONA -OPCIÓ CREAR NOVA FUNCIÓ (`https://stackoverflow.com/questions/40029157/javascript-console-returns-incorrect-sorted-array`)
    // async function myFunction() {
    //   baseDades.sort(function (a, b) {
    //     if (a[orden] > b[orden]) {
    //       return 1;
    //     }
    //     if (a[orden] < b[orden]) {
    //       return -1;
    //     }
    //     return 0;
    //   });
    // }
    // myFunction().then(console.log(baseDades));

    //! NO FUNCIONA - OPCIÓ CREAR NOVA VARIABLE (`https://stackoverflow.com/questions/62662695/confused-console-log-is-outputting-a-sorted-array-before-the-sort-operates-on-it`)
    // const sorted = baseDades.slice().sort(function (a, b) {
    //   if (a[orden] > b[orden]) {
    //     return 1;
    //   }
    //   if (a[orden] < b[orden]) {
    //     return -1;
    //   }
    //   return 0;
    // });
    // console.log(`Sorted Array : `, sorted);
  };

  return (
    <div className="ofertas">
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

        {/*! //!Com fer ELSE IF statements? */}
        {/* {if (TOTS SELECCIONATS O TOTS DESSELECCIONATS) {
                console.log("No aplicar cap filtre")
        } else if (filtroSectores.length && filtroContratos.length) {
                console.log("Aplicar els dos filtres")
        } else if (filtroSectores.length) {
            console.log("Només aplicar filtroSectores")
        } else if (filtroContratos.length) {
            console.log("Només aplicar filtroContratos")
        } */}

        {/* {filtroSectores.length ? filtrarSectores() : filtrarContratos} */}

        {baseDades
          // .filter(
          //   (item) =>
          //     (filtroSectores.length || filtroContratos.length) &&
          //     filtroSectores.includes(item.sector) &&
          //     filtroContratos.includes(item.contrato)
          // )
          .filter(
            (item) =>
              (filtroSectores.length && filtroSectores.includes(item.sector)) ||
              (filtroContratos.length &&
                filtroContratos.includes(item.contrato))
          )
          .map((e) => (
            <div className="oferta">
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
                  <strong>
                    {" "}
                    {e.publicación.split("-").reverse().join("-")}
                  </strong>
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
