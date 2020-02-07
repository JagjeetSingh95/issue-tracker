import React, { Component } from 'react';

export default class CustomInput extends Component {
  render() {
    const {
      name = "",
      label = "",
      value = "",
      onChange = () => {},
      errorMessage = "",
      placeholder = "",
      type = "text"
    } = this.props;

    return (
      <>
        <label>{label}</label>
        <input
          type={type}
          className="form-control"
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
          required
        />
        <div className="invalid-feedback">{errorMessage}</div>
      </>
    )
  }
}
