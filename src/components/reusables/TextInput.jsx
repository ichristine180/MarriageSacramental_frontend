/* eslint-disable react/prop-types */
import React from "react";

function TextInput({
  placeholder,
  handleChange,
  value,
  handleBlur,
  handleKeyDown,
  disable,
}) {
  return (
    <input
      type="text"
      value={value}
      className="form-control"
      placeholder={placeholder}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      disabled={disable}
    />
  );
}

export default TextInput;
