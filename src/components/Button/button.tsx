import React from "react";

interface ButtonProps {
  name?: string;
  onClick?: () => void;
  className?: string;
}

const Button = (props: ButtonProps) => {
  const { name } = props;

  return (
    <button className="border border-black-500 rounded p-1" {...props}>
      {name ?? "Click"}
    </button>
  );
};

export default Button;
