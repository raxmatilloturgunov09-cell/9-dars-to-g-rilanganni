import React from "react";
import { Link } from "react-router-dom";

function Button({ variant, text }) {
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    default: "btn-default",
    accent: "btn-accent",
    info: "btn-info",
    success: "btn-success",
    warning: "btn-warning",
    error: "btn-error",
  };

  return (
    <button className={`btn btn-active ${variants[variant]}`}>{text}</button>
  );
}

export default Button;
