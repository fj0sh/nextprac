import React from "react";

interface ButtonProps {
  name?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const { name, disabled, children } = props;

  return (
    <button
      className={`border border-black-500 rounded p-1`}
      {...props}
      disabled={disabled ? true : false}
    >
      {name ?? "Click"}
      {children}
    </button>
  );
};

export default Button;
