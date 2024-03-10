import React from 'react';

export const Checkbox = ({ checked, onChange, label }) => {
  return (
    <div>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <label>{label}</label>
    </div>
  );
};