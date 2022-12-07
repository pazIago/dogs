import React from "react";

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className="mb-4">
      <label className="leading block pb-2" htmlFor={name}>
        {label}
      </label>
      <input
        className={`${inputBaseStyle} ${inputHoverStyle} ${inputFocusStyle}`}
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

const inputBaseStyle =
  "block w-full rounded-md border-[1px] outline-none border-solid border-gray-100 bg-gray-100 p-3 transition focus-within:bg-white";

const inputHoverStyle =
  "hover:border-[1px] hover:border-solid hover:border-yellow-400 hover:bg-white hover:outline-none hover:ring-4 hover:ring-yellow-100";

const inputFocusStyle = inputHoverStyle.replaceAll("hover", "focus");

export default Input;
