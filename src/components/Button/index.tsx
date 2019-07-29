import React from "react";

interface ButtonProps {
  label?: string;
}

const Button: React.FC<ButtonProps> = ({ label = "Click Me" }) => (
  <button>{label}</button>
);

export default Button;
