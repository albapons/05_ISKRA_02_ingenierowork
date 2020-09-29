import React, { Component } from "react";
import "../../App.css";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      repeatPassword: "",
    };
  }

  // componentDidMount() {
  //   this.getUsers();
  // }

  // getUsers = () => {
  //   fetch(`/users`)
  //     .then((response) => response.json())
  //     .then((response) => {
  //       this.setState({ users: response });
  //     });
  // };

  // addUsers = () => {
  //   const { email, password, repeatPassword } = this.state;

  //   if (password === repeatPassword) {
  //     apiRegister.postUser(email, password, repeatPassword).then((response) => {
  //       console.log(response.data);
  //     });
  //     this.getUsers();
  //     window.location.href = "/login";
  //   } else {
  //     console.log("enviar alerta, les contrasenyes no coincideixen");
  //   }
  // };

  handleInput = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { email, password, repeatPassword } = this.state;
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
            {/* <i className="fas fa-envelope blue mr-3"></i> */}
            E-mail
          </label>
        </div>
        <div className="inputBox">
          <input
            type="password"
            id="defaultLoginFormPassword"
            name="password"
            value={password}
            onChange={this.handleInput}
            required
          />
          <span className="bar" />
          <label className="title5">
            {/* <i className="fas fa-lock blue mr-3"></i> */}
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
          <span className="bar" />
          <label className="title5">
            {/* <i className="fas fa-lock blue mr-3"></i> */}
            Repite la contraseña
          </label>
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
            <a className="blue ml-3" href="/login">
              Inicia sesión
            </a>
          </p>
        </div>
      </div>
    );
  }
}
