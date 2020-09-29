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
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  login = () => {
    const { email, password } = this.state;
    axios("/api/users/login", {
      method: "POST",
      data: {
        email,
        password,
      },
    })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        // console.log(response);
        this.props.history.push("/");
        // console.log(this.props);
        localStorage.setItem("email", email);
        // console.log(response);
        this.props.onLogin(email, this.props.history);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount = () => {
    if (localStorage.getItem("email"))
      this.setState({ email: localStorage.getItem("email") });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="loginBox">
        <div>
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
        <div>
          <input
            type="password"
            id="defaultLoginFormPassword"
            name="password"
            value={password}
            onChange={this.handleChange}
            required
          />
          <span className="bar" />
          <label className="title5">
            <i className="fas fa-lock blue mr-3"></i>Password
          </label>
        </div>

        <div className="text-center pt-0">
          <button
            className="buttonB"
            type="submit"
            onClick={this.login}
            disabled={!email || !password}
          >
            Sign in
          </button>
          <p className=" title5 pt-4">
            Not a member?
            <a className="blue" href="/register">
              Register
            </a>
          </p>
        </div>
      </div>
    );
  }
}
