import React from "react";

const Title = ({ text, variant='primary' }) => {
  let style = "";

  switch (variant) {
    case "primary":
      style = baseStyle;
      break;

    case "secondary":
      style = variantStyle;
  }

  return <h1 className={style}>{text}</h1>;
};

const baseStyle =
  "text-bold relative z-10 my-4 mx-0 mb-2 font-secondary text-5xl font-bold leading-none after:absolute after:bottom-1 after:-left-1 after:-z-10 after:block after:h-6 after:w-6 after:rounded-[0.2rem] after:bg-yellow-400";

export default Title;
