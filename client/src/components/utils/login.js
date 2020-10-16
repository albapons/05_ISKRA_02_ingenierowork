import React, { Component } from "react";
import axios from "axios";
import "./login.css";
import "../../App.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      alerta: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  login = () => {
    const { email, password } = this.state;
    axios("/users/login", {
      method: "POST",
      data: {
        email,
        password,
      },
    })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        // console.log(response);
        // this.props.history.push("/home");
        // // console.log(this.props);
        localStorage.setItem("email", email);
        // console.log(response);
        this.props.onLogin(email, this.props.history);
      })
      .catch((error) => {
        console.log(error);
        this.setState({ alerta: true });
      });
  };

  componentDidMount = () => {
    if (localStorage.getItem("email"))
      this.setState({ email: localStorage.getItem("email") });
  };

  togglePassword = (e) => {
    // Per canviar color eye
    let eye = document.getElementById("eye");
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
    const { email, password } = this.state;
    return (
      <div className="loginBox">
        <div className="text-center">
          <div className="text-center">
            <i className="fas fa-user fa-4x blue text-center"></i>
          </div>
          <div className="title2">Hola de nuevo!</div>
          <div className="title4thin mb-3">Inicia sesión en tu cuenta...</div>
        </div>

        <div className="inputBox">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={this.handleChange}
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
            onChange={this.handleChange}
            required
          />
          <div id="toggle" onClick={(e) => this.togglePassword("password")}>
            <i id="eye" className="fas fa-eye blue"></i>
          </div>
          <span className="bar" />
          <label className="title5">
            <i className="fas fa-lock blue mr-3" />
            Contraseña
          </label>
          {this.state.alerta && (
            <div class="alert alert-danger" role="alert">
              El usuario y/o clave son incorrectas, vuelva a intentarlo.
            </div>
          )}
        </div>

        <div className="text-center pt-2">
          <button
            className="buttonB"
            type="submit"
            onClick={this.login}
            disabled={!email || !password}
          >
            {/* button disabled styling */} Iniciar sesión
          </button>
          <p className=" title5 mb-3 pt-4">
            ¿Eres nuevo/a en IngenieroWork?
            <a className="blue ml-3" href="/register">
              Crea tu cuenta
            </a>
          </p>
        </div>
      </div>
    );
  }
}
