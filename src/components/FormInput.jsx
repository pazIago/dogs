import React from "react";

const FormInput = ({ type, value = "", id, onChange, placeHolder='' }) => {
  return (
    <input
      type={type}
      value={value}
      id={id}
      onChange={onChange}
      placeholder={placeHolder}
      className="w-full outline-0 border-2 border-solid border-blue-300 rounded-md px-2 py-2"
    />
  );
};

export default FormInput;
