import React, { Component } from "react";
import "./paginate.css";

export default class provaPaginate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageList: [],
      currentPage: 1,
      numberPerPage: 5,
      numberOfPages: 0,
    };
  }

  componentDidMount = (prevProps, prevState) => {
    this.loadList();
  };

  // To refresh the props when they're ready
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.newBaseDades !== this.props.newBaseDades) {
      // Mostrar pàgina 1
      this.setState({ currentPage: 1 });
      // Carregar pàgina
      this.loadList();
    }
    prevState.currentPage !== this.state.currentPage && this.loadList();
  }

  // Display buttons en funció del nº de pàgines que necessitem
  displayButtons = () => {
    let buttons = [];
    for (let i = 0; i < this.state.numberOfPages; i++) {
      buttons.push(
        <button
          key={i + 1}
          className="buttonPagination"
          id={i + 1}
          onClick={(e) => this.loadList(e)}
        >
          {i + 1}
        </button>
      );
    }
    return buttons;
  };

  previousPage = () => {
    if (this.state.currentPage > 1) {
      this.setState({ currentPage: (this.state.currentPage -= 1) });
    }
    this.loadList();
  };

  nextPage = () => {
    if (this.state.currentPage < this.state.numberOfPages) {
      this.setState({ currentPage: (this.state.currentPage += 1) });
    }
    this.loadList();
  };

  loadList = (e) => {
    const { currentPage, numberOfPages, pageList } = this.state;
    // Si hem clicat un botó, canviar de pàgina sinó per defecte, pàgina 1
    e && this.setState({ currentPage: parseInt(e.target.id) });

    //! Actualitzar URL
    // console.log(window.location.href);
    // window.location.hash = `page=${this.state.currentPage}`;

    // Arrow PREVIOUS, activa / desactiva
    document.getElementById("arrowP") &&
      (currentPage === 1
        ? document.getElementById("arrowP").classList.add("disabled")
        : document.getElementById("arrowP").classList.remove("disabled"));

    // Arrow NEXT, activa / desactiva
    document.getElementById("arrowN") &&
      (currentPage === numberOfPages
        ? document.getElementById("arrowN").classList.add("disabled")
        : document.getElementById("arrowN").classList.remove("disabled"));

    // Definir número de pàgines que tindrem
    this.setState({
      numberOfPages: Math.ceil(
        this.props.newBaseDades.length / this.state.numberPerPage
      ),
    });

    // Definir origen i fi, i filtrar
    var begin = (this.state.currentPage - 1) * this.state.numberPerPage;
    var end = begin + this.state.numberPerPage;
    this.setState({ pageList: this.props.newBaseDades.slice(begin, end) });
    // console.log("url");
    // console.log(
    //   "number is " + this.props.newBaseDades.length / this.state.numberPerPage
    // );
    // console.log("current is " + this.state.currentPage);
  };

  render() {
    const { pageList } = this.state;

    return (
      <div className="pageList">
        {pageList.map((e) => (
          <div className="oferta" key={e.id}>
            <div className="row">
              <div className="col">
                {/* <div className="title3 blue">{e.id}</div> */}
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

        {pageList.length !== 0 ? (
          <div className="buttonsPagination">
            <span onClick={(e) => this.previousPage(e)}>
              <i className="fas fa-caret-left blue fa-3x mr-4" id="arrowP" />
            </span>
            {this.displayButtons()}
            <span onClick={(e) => this.nextPage(e)}>
              <button
                className="fas fa-caret-right blue fa-3x ml-4"
                id="arrowN"
              />
            </span>
          </div>
        ) : (
          <div className="not title4thin">No results to show</div>
        )}
      </div>
    );
  }
}
