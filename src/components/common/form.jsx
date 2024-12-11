import { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";

class Form extends Component {
  state = { data: {}, errors: {} };
  validate = () => {
    //destructuring error message from our validate function
    //making abortEarly array separtely as it was making the code code ugly when writing in Joi.validate
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    //We iterate over the details child of error object(returned by Joi) and display the message in the errors[item.path[0]] (which is the lable i.e either username or password field)
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };
  validateProperty = ({ name, value }) => {
    //We use computed properties of ES6 to dynamically add the value at runtime
    //New sub schema as we want to validate single field at at time and hence we can't use the old schema with both the fields
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };
  handleSubmit = (e) => {
    //e is event and we are preventing Default to avoid causing the app to reload all over again
    e.preventDefault();

    //Validation stuffs
    const errors = this.validate();
    //We have set the state to errors(if truthy), but if falsey we have set it to an empty object as we dont want to get a runtime error because of null which we set to error during validate method
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  //Input here is the value of our currentTarget of e (i.e field which is currently selected) & since we dont need other methods of e we have destructured it in the parameter of the function
  handleChange = ({ currentTarget: input }) => {
    //Validation on Change
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    //Creating new array as we should never change our state directly
    //Dynamically setting the value of newly created array as that of our events value(i.e value of the input field)
    //Note that name is an attribute in the input field of form whose value is same as the corresponding key of the data object of state
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };
  renderButton = ({ label, ...rest }) => {
    return (
      <button
        disabled={this.validate()}
        type="submit"
        className="btn btn-primary"
        {...rest}
      >
        {label}
      </button>
    );
  };

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      //   vaule helps to make sinlge source of truthy i.e link the value of the input box(or sets the value) to that of the state
      //   onChange is event listner
      <Input
        type={type}
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

export default Form;
