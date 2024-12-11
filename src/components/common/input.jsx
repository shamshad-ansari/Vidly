import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        //...rest helps us to add all the additional properties without explicitly writing them
        //Also with this method we don't need to come to this component every time we need to add or remove new propterty to input component
        //We didn't include name, label and error in our ...rest operator as we explicitly need them in our code.
        {...rest}
        id={name}
        name={name}
        className="form-control"
      ></input>
      {/* if error is truthy div will be returned if it's falsey div won't be returned*/}
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
