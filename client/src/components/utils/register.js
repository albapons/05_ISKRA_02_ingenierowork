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
      alertaContraseñas: false,
      alertaEmails: false,
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

  validateEmail(email) {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(mailformat)) {
      return true;
    } else {
      this.setState({ alertaEmails: true });
      return false;
    }
  }

  addUsers = () => {
    const { email, password, repeatPassword } = this.state;
    if (this.validateEmail(email) && password === repeatPassword) {
      apiRegister.postUser(email, password).then((response) => {
        this.props.notify(response.data.msg);
        if (response.data.msg !== "¡Usuario ya registrado!") {
          this.props.history.push("/users/login");
        }
      });
      this.getUsers();
    } else if (!this.validateEmail(email)) {
      this.setState({ alertaEmails: true });
    } else if (password !== repeatPassword) {
      this.setState({ alertaContraseñas: true });
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

    // Per canviar color eye
    let eye;
    e === "password"
      ? (eye = document.getElementById("eye1"))
      : (eye = document.getElementById("eye2"));
    eye.className.animVal.includes("text-muted")
      ? eye.classList.remove("text-muted")
      : eye.classList.add("text-muted");

    // Per canviar type password / text
    var x = document.getElementById(e);
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  render() {
    const {
      email,
      password,
      repeatPassword,
      alertaContraseñas,
      alertaEmails,
    } = this.state;
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
          <label className="title5">
            <i className="fas fa-envelope blue mr-3" />
            E-mail
          </label>
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
            <i id="eye1" className="fas fa-eye blue"></i>
          </div>

          <span className="bar" />
          <label className="title5">
            <i className="fas fa-lock blue mr-3" />
            Contraseña
          </label>
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
            <i id="eye2" className="fas fa-eye blue"></i>
          </div>

          <span className="bar" />
          <label className="title5">
            <i className="fas fa-lock blue mr-3" />
            Repite la contraseña
          </label>
          {alertaEmails && (
            <div class="alert alert-danger" role="alert">
              El correo electrónico no es válido, por favor, revísalo.
            </div>
          )}
          {alertaContraseñas && (
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
