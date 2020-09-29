import React, { Component } from "react";
import "./login.css";
import "../../App.css";
export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  }

  handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { name, email, subject, message } = this.state;
    return (
      <div className="loginBox">
        <div className="text-center">
          <div className="text-center">
            <i className="fas fa-hands-helping fa-4x blue text-center"></i>
          </div>
          <div className="title2">¿Te ayudamos?</div>
          <div className="title4thin mb-3">
            Por favor, llena este formulario para que podamos responder
            adecuadamente tu pregunta
          </div>
        </div>
        <div className="inputBox">
          <input
            type="name"
            id="name"
            name="name"
            value={name}
            onChange={this.handleChange}
            required
          />
          <span className="bar" />
          <label className="title5">
            <i className="fas fa-envelope blue mr-3"></i>Nombre
          </label>
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
            <i className="fas fa-envelope blue mr-3"></i>E-mail
          </label>
        </div>
        <div className="inputBox">
          <input
            type="subject"
            id="subject"
            name="subject"
            value={subject}
            onChange={this.handleChange}
            required
          />
          <span className="bar" />
          <label className="title5">
            <i className="fas fa-lock blue mr-3"></i>Asunto
          </label>
        </div>
        <div className="inputBox">
          <input
            type="textarea"
            id="message"
            name="message"
            value={message}
            onChange={this.handleChange}
            required
          />
          <span className="bar" />
          <label className="title5">
            <i className="fas fa-lock blue mr-3"></i>Deja tu mensaje
          </label>
        </div>

        <div className="text-center pt-2">
          <button
            className="buttonB"
            type="submit"
            onClick={this.login}
            // disabled={!email || !password}
          >
            Enviar
          </button>
        </div>
      </div>
    );
  }
}
