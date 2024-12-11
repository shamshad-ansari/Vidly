import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class LoginForm extends Form {
  // Whenever building form put the values of your state as an empty string because we build forms as a controlled element(cause we code to have single source of truth)
  state = {
    data: { username: "", password: "" },
    //adding error state for validation purposes
    errors: {},
  };

  //JOI Stuff
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    //Call the server
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h1 className="mb-4">Login</h1>
        <form className="w-50" onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
