// Assuming this is the Input component located at "@/components/ui/input"
import React from "react";

const Input = ({ className, placeholder, type }) => {
  return (
    <input
      className={`py-2 px-4 rounded-md border-2 border-gray-400 focus:outline-none focus:border-black ${className}`}
      type={type}
      placeholder={placeholder}
      //   value={value}
      //   onChange={onChange}
    />
  );
};

export { Input };
