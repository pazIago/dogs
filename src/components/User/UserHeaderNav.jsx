import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { ReactComponent as FeedSvg } from "../../assets/feed.svg";
import { ReactComponent as InsightsSvg } from "../../assets/estatisticas.svg";
import { ReactComponent as PostSvg } from "../../assets/adicionar.svg";
import { ReactComponent as LogoutSvg } from "../../assets/sair.svg";
import useScreenSize from "../../hooks/useScreenSize";

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const [mobileMenu, setMobileMenu] = useState(false);
  const mobile = useScreenSize("(max-width:40rem)");

  return (
    <>
      {
        <button
          className={mobileStyle}
          aria-label="menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <div
            className={
              mobileMenu
                ? "flex rotate-90 gap-[4px] transition"
                : "flex flex-col gap-[4px] transition"
            }
          >
            <div
              className={
                mobileMenu
                  ? "block h-[4px] w-[4px] rounded bg-current"
                  : "block h-[2px] w-5 rounded bg-current"
              }
            ></div>
            <div
              className={
                mobileMenu
                  ? "block h-[4px] w-[4px] rounded bg-current"
                  : "block h-[2px] w-5 rounded bg-current"
              }
            ></div>
            <div
              className={
                mobileMenu
                  ? "block h-[4px] w-[4px] rounded bg-current"
                  : "block h-[2px] w-5 rounded bg-current"
              }
            ></div>
          </div>
        </button>
      }
      <nav className="grid grid-cols-4 gap-4">
        <NavLink
          className={({ isActive }) => (isActive ? linkActiveStyle : linkStyle)}
          to="/conta"
          end
        >
          <FeedSvg /> {mobile && "Meu Feed"}
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? linkActiveStyle : linkStyle)}
          to="/conta/insights"
        >
          <InsightsSvg />
          {mobile && "Insights"}
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? linkActiveStyle : linkStyle)}
          to="/conta/post"
        >
          <PostSvg />
          {mobile && "Postar Foto"}
        </NavLink>
        <button className={linkStyle} onClick={userLogout}>
          <LogoutSvg />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

const mobileBaseStyle =
  "flex h-10 w-10 cursor-pointer items-center justify-center rounded border-[1px] border-transparent bg-slate-100 transition";
const mobileHoverStyle =
  "hover:outline-none hover:bg-white hover:ring-4 hover:ring-yellow-100 hover:border-yellow-400 hover:text-yellow-400";
const mobileFocusStyle = mobileHoverStyle.replaceAll("hover", "focus");
const mobileStyle = `${mobileBaseStyle} ${mobileHoverStyle} ${mobileFocusStyle}`;

const linkBaseStyle =
  "flex h-10 w-10 cursor-pointer items-center justify-center rounded border-[1px] border-transparent bg-slate-100 transition";

const linkHoverStyle =
  "hover:border-gray-900 hover:bg-white hover:outline-none hover:ring-2 hover:ring-slate-100";

const linkFocusStyle = linkHoverStyle.replaceAll("hover", "focus");

const linkStyle = `${linkBaseStyle} ${linkHoverStyle} ${linkFocusStyle}`;

const linkActiveStyle =
  "flex h-10 w-10 cursor-pointer items-center justify-center rounded border-[1px] bg-white border-yellow-400 ring-4 ring-yellow-100 transition text-yellow-400";
export default UserHeaderNav;
