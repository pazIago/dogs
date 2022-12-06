import React from "react";
import { ReactComponent as Dogs } from "../assets/dogs-footer.svg";

const Footer = () => {
  return (
    <footer className="bg-yellow-400 h-16 flex justify-center items-center">
      <Dogs />
    </footer>
  );
};

export default Footer;
