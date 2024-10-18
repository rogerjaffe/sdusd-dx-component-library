import React from "react";
import "./Button.css";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  const onClick = () => {
    alert("Hello world!");
  };

  return <button onClick={onClick}>{props.label}</button>;
};

export default Button;
