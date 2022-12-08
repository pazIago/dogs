import React from "react";

const Subtitle = ({ text, variant = "primary" }) => {
  let style = "";

  switch (variant) {
    case "primary":
      style = baseStyle;
      break;

    case "secondary":
      style = variantStyle;
  }

  return <h2 className={style}>{text}</h2>;
};

const baseStyle =
  "font-secondary text-2xl font-semibold leading-none after:block after:h-2 after:w-12 after:rounded-[0.2rem] after:bg-gray-200";

export default Subtitle;
