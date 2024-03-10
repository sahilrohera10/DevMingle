// src/components/ui/badge.js
import React from "react";

const Badge = ({ className, variant, children }) => {
  return (
    <span className={`badge ${className}`} variant={variant}>
      {children}
    </span>
  );
};

export { Badge };
