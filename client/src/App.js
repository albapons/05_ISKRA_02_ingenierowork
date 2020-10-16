import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import NavBar from "./components/utils/navBar";
import Empresas from "./components/empresasPage/empresas";
import Especiales from "./components/especialesPage/especiales";
import Filtros from "./components/ofertasPage/filtros";
import Home from "./components/homePage/home";
import Footer from "./components/utils/footer";
import PageError from "./components/utils/pageError";
import Contact from "./components/utils/contact";
import LogIn from "./components/utils/login";
import Register from "./components/utils/register";
import "./App.css";

// React - Toastify
toast.configure();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", login: false };
  }

  // si està login guardar com a state l'email
  componentDidMount() {
    if (localStorage.getItem("email"))
      this.setState({ email: localStorage.getItem("email"), login: true });
  }

  // guardar e-mail després de login i redirigir a home page
  onLogin = (email, history) => {
    this.setState({ email, login: true });
    history.push("/home");
    this.notify("¡Bienvenido!");
  };

  // guardar e-mail després de login i redirigir a home page
  onRegister = (history) => {
    history.push("/users/login");
    this.notify("¡Cuenta creada correctamente, ya puedes iniciar tu sesión!");
  };

  notify = (text) => toast.warning(text);

  // eliminar de localStorage i de l'estat email i token
  logOut = () => {
    var bool = window.confirm("¿Seguro que quiere cerrar la sesión?");
    if (bool) {
      localStorage.removeItem("email");
      localStorage.removeItem("token");
      this.setState({ email: "", login: false });
      this.notify("¡Hasta pronto!");
    } else {
      this.notify("¡Seguimos conectados!");
    }
  };
  // Amb sessionStorage s'eliminen les dades cada cop que es tanca pestanya

  render() {
    return (
      <div className="App">
        <Router>
          <NavBar login={this.state.login} logOut={this.logOut} />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Switch>
            <Route path="/empresas" component={Empresas} />
            <Route path="/especiales">
              <Especiales />
            </Route>
            <Route path="/ofertas" component={Filtros} />
            <Route
              path="/users/login"
              render={(props) => <LogIn onLogin={this.onLogin} {...props} />}
            />
            <Route
              path="/register"
              render={(props) => (
                <Register onRegister={this.onRegister} {...props} />
              )}
            />
            <Route path="/contacto" component={Contact} />
            <Route path="/home" component={Home} />
            <Route component={PageError} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}
