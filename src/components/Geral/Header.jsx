import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as DogsSvg } from "../../assets/dogs-black.svg";
import { ReactComponent as UserSvg } from "../../assets/usuario.svg";
import { UserContext } from "../../context/UserContext";

const Header = () => {
  const { userData } = useContext(UserContext);

  return (
    <header className="sticky top-0 z-20 bg-white shadow-md">
      <nav className="mx-auto flex max-w-[800px] items-center justify-between gap-2 p-2">
        <NavLink className="py-2" to="/">
          <DogsSvg />
        </NavLink>

        {userData ? (
          <>
            <NavLink
              className="relative -top-[1px] flex items-center gap-2 text-gray-800"
              to="/conta"
            >
              {userData.nome}
              <UserSvg />
            </NavLink>
          </>
        ) : (
          <NavLink
            className="relative -top-[1px] flex items-center gap-2 text-gray-800"
            to="/login"
          >
            Login / Criar
            <UserSvg />
          </NavLink>
        )}
      </nav>
    </header>
  );
};

export default Header;
