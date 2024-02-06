import React from "react";

function InputField({ type, placeholder, id, label, onChange }) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default InputField;
