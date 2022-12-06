import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Dogs } from "../assets/dogs-black.svg";
import { ReactComponent as User } from "../assets/usuario.svg";

const Header = () => {
  return (
    <header className="shadow-md sticky top-0 z-10 bg-white">
      <nav className="max-w-[800px] mx-auto flex justify-between items-center gap-2 p-2">
        <NavLink className="py-2" to="/">
          <Dogs />
        </NavLink>
        <NavLink
          className="text-gray-800 flex gap-2 items-center relative -top-[1px]"
          to="login"
        >
          Login / Criar <User/>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
