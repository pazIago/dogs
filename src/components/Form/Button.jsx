import React from "react";

const Button = ({ text, ...props }) => {
  return (
    <button
      className={`${baseStyle} ${focusStyle} ${hoverStyle} ${disabledStyle} ${
        props.className ? props.className : ""
      }`}
      disabled={props.disabled}
    >
      {text}
    </button>
  );
};

const baseStyle =
  "pointer box-border min-w-[8rem] rounded-lg bg-yellow-400 px-5 py-5 font-primary font-bold text-yellow-800 border-[3px] border-yellow-400 transition";

const hoverStyle =
  "hover:outline-none hover:border-[3px] hover:border-yellow-100 hover:ring-[1px] hover:ring-yellow-400";

const focusStyle = hoverStyle.replaceAll("hover", "focus");

const disabledStyle = "disabled:cursor-wait disabled:opacity-50";

export default Button;
