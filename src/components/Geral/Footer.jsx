import React from "react";
import { ReactComponent as DogsSvg } from "../../assets/dogs-footer.svg";

const Footer = () => {
  return (
    <footer className="flex h-16 items-center justify-center bg-yellow-400">
      <DogsSvg />
    </footer>
  );
};

export default Footer;
