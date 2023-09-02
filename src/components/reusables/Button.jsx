/* eslint-disable react/prop-types */
import React from "react";
import { Button as Btn } from "react-bootstrap";

function Button({ label, handleClick, buttonType = "primary" }) {
  return (
    <Btn
      onClick={handleClick}
      className={buttonType === "primary" ? "btn-primary" : "btn-secondary "}
    >
      {label}
    </Btn>
  );
}

export default Button;
