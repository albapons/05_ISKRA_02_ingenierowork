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

  // To refresh the props when they're ready
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.newBaseDades !== this.props.newBaseDades) {
      this.setState({ currentPage: 1 });
      this.loadList();
    }
    prevState.currentPage !== this.state.currentPage && this.loadList();
  }

  // Carrega quines ofertes s'han de mostrar
  loadList = () => {
    // Definir número de pàgines que tindrem
    this.setState({
      numberOfPages: Math.ceil(
        this.props.newBaseDades.length / this.state.numberPerPage
      ),
    });
    //Definir origen i fi i filtrar
    var begin = (this.state.currentPage - 1) * this.state.numberPerPage;
    var end = begin + this.state.numberPerPage;
    this.setState({ pageList: this.props.newBaseDades.slice(begin, end) });
    // this.check();       // determines the states of the pagination buttons
  };

  // Display buttons
  displayButtons = () => {
    let buttons = [];

    for (let i = 1; i < this.state.numberOfPages; i++) {
      buttons.push(
        <button
          className="buttonPagination"
          id={i}
          onClick={(e) => this.check(e)}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  //  Funcions per cada botó
  previousPage = () => {
    this.state.currentPage -= 1;
    this.loadList();
    //! actualitzar query amb nº de pàgina
  };

  nextPage = () => {
    this.state.currentPage += 1;
    this.loadList();
    //! actualitzar query amb nº de pàgina
  };

  //! Canvia l'estat dels botons
  check = (e) => {
    const { currentPage, numberOfPages } = this.state;
    // console.log(e.target.id);
    this.setState({ currentPage: e.target.id });
    this.loadList();

    // Si currentPage === 1 botó previous disabled
    document.getElementById(e.target.id).disabled =
      currentPage == 1 ? true : false;
    // Si currentPage === numberOfPages botó next disabled
    document.getElementById(e.target.id).disabled =
      currentPage == numberOfPages ? true : false;
    //! Si currentPage === e.target.id aplicar styling botó actiu
  };

  render() {
    const { newBaseDades } = this.props;
    const { pageList } = this.state;

    return (
      <div>
        {console.log(pageList)}

        {pageList.map((e) => (
          <div className="oferta" key={e.id}>
            <div className="row">
              <div className="col">
                <div className="title3 blue">{e.id}</div>
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

        <div className="buttonsPagination">
          <span onClick={(e) => this.previousPage(e)}>
            <i className="fas fa-caret-left blue fa-3x mr-4" />
          </span>
          {this.displayButtons()}
          {/* <button
            className="buttonPagination"
            id="1"
            onClick={(e) => this.check(e)}
          >
            1
          </button>
          <button
            className="buttonPagination"
            id="2"
            onClick={(e) => this.check(e)}
          >
            2
          </button>
          <button
            className="buttonPagination"
            id="3"
            onClick={(e) => this.check(e)}
          >
            3
          </button> */}
          <span onClick={(e) => this.nextPage(e)}>
            <i className="fas fa-caret-right blue fa-3x ml-4" />
          </span>
        </div>
      </div>
    );
  }
}
