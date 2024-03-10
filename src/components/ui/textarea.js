import React from "react";

export const Textarea = ({ value, onChange, placeholder, className }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      className={className}
      placeholder={placeholder}
    />
  );
};
