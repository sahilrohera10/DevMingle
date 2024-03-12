import React from "react";

export const Avatar = ({ children }) => {
  return <div className="avatar">{children}</div>;
};

export const AvatarImage = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className} />;
};
