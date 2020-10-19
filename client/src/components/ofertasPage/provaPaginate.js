import React, { Component } from "react";
import "./filtros.css";

export default class provaPaginate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageList: [], // les ofertes que es mostraran en cada llista
      currentPage: 1, // A quina pàgina estem
      numberPerPage: 5, // Nº d'ofertes per pàgina
      numberOfPages: 1, // Total number of pages
    };
  }

  componentDidMount = () => {
    this.loadList();
  };

  //! Carrega quines ofertes s'han de mostrar
  loadList = () => {
    console.log(this.props.newBaseDades); //! AIXÒ NO FUNCIONAAAAA!!!
    // Definir número de pàgines que tindrem
    this.setState({
      numberOfPages: Math.ceil(
        this.props.newBaseDades.length / this.state.numberPerPage
      ),
    });
    //Definir origen i fi
    var begin = (this.state.currentPage - 1) * this.state.numberPerPage;
    var end = begin + this.state.numberPerPage;
    // Definir quines ofertes mostrem
    this.setState({ pageList: this.props.newBaseDades.slice(begin, end) });
    // this.check();       // determines the states of the pagination buttons
  };

  //! Funcions per cada botó
  // previousPage = () => {
  //   this.state.currentPage -= 1;
  //   this.loadList();
  // };

  // firstPage = () => {
  //   this.state.currentPage = 1;
  //   this.loadList();
  // };

  // lastPage = () => {
  //   this.state.currentPage = this.state.numberOfPages;
  //   this.loadList();
  // };

  //! Canvia l'estat dels botons
  // check = () => {
  // document.getElementById("next").disabled = currentPage == numberOfPages ? true : false;
  // document.getElementById("previous").disabled = currentPage == 1 ? true : false;
  // document.getElementById("first").disabled = currentPage == 1 ? true : false;
  // document.getElementById("last").disabled = currentPage == numberOfPages ? true : false;
  // };

  render() {
    const { newBaseDades } = this.props;
    const { pageList } = this.state;

    return (
      <div>
        {console.log(pageList)}

        {/* {pageList.map((e) => ( */}
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
        {/* <div style="text-align:center;">
     <input type="button" id="first" onclick="firstPage()" value="first" />
     <input type="button" id="next" onclick="nextPage()" value="next" />
     <input type="button" id="previous" onclick="previousPage()" value="previous" />
     <input type="button" id="last" onclick="lastPage()" value="last" />

     <div id="list"></div>
     </div> */}
      </div>
    );
  }
}
