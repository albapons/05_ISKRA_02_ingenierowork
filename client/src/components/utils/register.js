import React, { Component } from "react";
import "../../App.css";
import "./login.css";
import apiRegister from "./api/apiRegister";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      repeatPassword: "",
      alerta: false,
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    fetch(`/users`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ users: response });
      });
  };

  addUsers = () => {
    const { email, password, repeatPassword } = this.state;

    if (password === repeatPassword) {
      console.log("correct!");
      apiRegister.postUser(email, password).then((response) => {
        console.log(response.data);
      });
      this.getUsers();
      window.location.href = "/users/login";
    } else {
      this.setState({ alerta: true });
    }
  };

  handleInput = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  togglePassword = (e) => {
    console.log(e);
    // La X ens servirà per canviar type password / text
    var x = document.getElementById(e);
    //! La Y ens servirà per canviar la icona eye - NO FUNCIONA
    // var y = document.getElementsByName("eye")[0];

    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  render() {
    const { email, password, repeatPassword, alerta } = this.state;
    return (
      <div className="loginBox">
        <div className="text-center">
          <div className="text-center">
            <i className="fas fa-user-friends fa-4x blue text-center"></i>
          </div>
          <div className="title2">Bienvenido/a!</div>
          <div className="title4thin mb-3">Crea tu propia cuenta...</div>
        </div>

        <div className="inputBox">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={this.handleInput}
            required
          />
          <span className="bar" />
          <label className="title5">E-mail</label>
        </div>
        <div className="inputBox">
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={this.handleInput}
            required
          />

          <div id="toggle" onClick={(e) => this.togglePassword("password")}>
            <i className="fas fa-eye blue"></i>
          </div>

          <span className="bar" />
          <label className="title5">Contraseña</label>
        </div>
        <div className="inputBox">
          <input
            type="password"
            id="repeatPassword"
            name="repeatPassword"
            value={repeatPassword}
            onChange={this.handleInput}
            required
          />
          <div
            id="toggle"
            onClick={(e) => this.togglePassword("repeatPassword")}
          >
            <i name="eye" className="fas fa-eye blue"></i>
          </div>

          <span className="bar" />
          <label className="title5">Repite la contraseña</label>
          {alerta && (
            <div class="alert alert-danger" role="alert">
              Las contraseñas no coinciden, por favor, revisa los dos campos.
            </div>
          )}
        </div>

        <div className="text-center pt-0">
          <button
            className="buttonB"
            type="submit"
            onClick={this.addUsers}
            disabled={!email || !password}
          >
            Crear cuenta
          </button>
          <p className=" title5 pt-4">
            ¿Ya tienes una cuenta?
            <a className="blue ml-3" href="/users/login">
              Inicia sesión
            </a>
          </p>
        </div>
      </div>
    );
  }
}
