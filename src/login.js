import React, { Component } from "react";
// import Axios from "axios";
// import Services from "../Services";
// import Functions from "../Funcs";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    // this.funcs = new Functions(this, "password", "email");
  }

// 

  togglePassword = () => {
    if (document.getElementById("Password").type === "password") {
      document.getElementById("Password").type = "text";
    } else {
      document.getElementById("Password").type = "password";
    }
  };

  render() {
    return (
      <div className="center-block">
        <div className="login">
          <div className="login-white animated fadeInLeftBig">
              <div className="panel-body">
                <h4 className="text-center">WELCOME</h4>
                <hr />
                <p className="text-center">Login to continue.</p>
                <br />
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control field-required"
                    placeholder="Username"
                    autoComplete="off"
                  />
                  <span className="required-span">Email is required</span>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control field-required"
                    placeholder="Password"
                    autoComplete="off"
                  />
                  <span
                    toggle="#password-field"
                    className="fa fa-fw fa-eye field-icon toggle-password"
                    onClick={this.togglePassword}
                  />
                  <span className="required-span">Password is required</span>
                </div>
                <a href="/Create-Customer">
                <input
                    type="submit"
                    value="Login"
                    className="btn btn-sm rounded btn-primary btn-block "
                  />
                </a>
                  
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
