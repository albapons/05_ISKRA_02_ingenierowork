import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/utils/navBar";
import Empresas from "./components/empresasPage/empresas";
import Especiales from "./components/especialesPage/especiales";
import Ofertas from "./components/ofertasPage/ofertas";
import Home from "./components/homePage/home";
import Footer from "./components/utils/footer";
import PageError from "./components/utils/pageError";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route path="/empresas">
              <Empresas />
            </Route>
            <Route path="/especiales">
              <Especiales />
            </Route>
            <Route path="/ofertas">
              <Ofertas />
            </Route>
            <Route path="/login">{/* <LogIn /> */}</Route>
            <Route path="/register">{/* <RegisterForm /> */}</Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route component={PageError} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}
