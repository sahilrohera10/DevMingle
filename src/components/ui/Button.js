import React from "react";

const Button = ({ className, variant, children }) => {
  return (
    <button className={className} variant={variant}>
      {children}
    </button>
  );
};

export { Button };
