import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class RegisterForm extends Form {
  // Whenever building form put the values of your state as an empty string because we build forms as a controlled element(cause we code to have single source of truth)
  state = {
    data: { name: "", username: "", password: "" },
    //adding error state for validation purposes
    errors: {},
  };

  //JOI Stuff
  schema = {
    name: Joi.string().required().label("Name"),
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
  };

  doSubmit = () => {
    //Call the server
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h1 className="mb-4">Register</h1>
        <form className="w-50" onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
