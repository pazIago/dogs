import React from "react";
import { ReactComponent as DogsSvg } from "../../assets/dogs-footer.svg";

const Footer = () => {
  return (
    <footer className="h-40 bg-yellow-400 px-4 pt-12 text-center justify-center flex flex-col">
      <DogsSvg className="w-full" />
      <p className="mt-4 text-yellow-800 font-medium">Dogs | Alguns direitos reservados.</p>
    </footer>
  );
};

export default Footer;
