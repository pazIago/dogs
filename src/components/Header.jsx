import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Dogs } from "../assets/dogs-black.svg";
import { ReactComponent as User } from "../assets/usuario.svg";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const { userData, userLogout } = useContext(UserContext);

  return (
    <header className="sticky top-0 z-20 bg-white shadow-md">
      <nav className="mx-auto flex max-w-[800px] items-center justify-between gap-2 p-2">
        <NavLink className="py-2" to="/">
          <Dogs />
        </NavLink>

        {userData ? (
          <>
            <NavLink
              className="relative -top-[1px] flex items-center gap-2 text-gray-800"
              to="/conta"
            >
              {userData.nome}
              <User />
            </NavLink>
            <button onClick={userLogout}>Sair</button>
          </>
        ) : (
          <NavLink
            className="relative -top-[1px] flex items-center gap-2 text-gray-800"
            to="/login"
          >
            Login / Criar
            <User />
          </NavLink>
        )}
      </nav>
    </header>
  );
};

export default Header;
