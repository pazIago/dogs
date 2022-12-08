import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
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
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          className={mobileMenu ? mobileActiveStyle : mobileStyle}
          aria-label="menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <div
            className={`flex flex-col transition duration-200 ${
              mobileMenu ? "-rotate-90 gap-[8px]" : "gap-[4px]"
            }`}
          >
            <div
              className={`block rounded bg-current transition duration-200 ${
                mobileMenu ? "h-[4px] w-[4px]" : "h-[2px] w-5"
              }`}
            ></div>
            <div
              className={`block rounded bg-current transition duration-200 ${
                mobileMenu ? "h-[4px] w-[4px]" : "h-[2px] w-5"
              }`}
            ></div>
            <div
              className={`block rounded bg-current transition duration-200 ${
                mobileMenu ? "h-[4px] w-[4px]" : "h-[2px] w-5"
              }`}
            ></div>
          </div>
        </button>
      )}
      <nav
        className={`transition duration-200 ${
          mobile
            ? mobileMenu
              ? "absolute top-[70px] right-0 block translate-x-3 rounded bg-white px-4 opacity-100 shadow"
              : "pointer-events-none absolute top-[70px] right-0 block translate-x-0 rounded bg-white px-4 opacity-0"
            : "grid grid-cols-4 gap-4"
        }`}
      >
        <NavLink
          className={
            mobile
              ? ({ isActive }) =>
                  isActive ? mobileLinkActiveStyle : mobileLinkStyle
              : ({ isActive }) => (isActive ? linkActiveStyle : linkStyle)
          }
          to="/conta"
          end
        >
          <FeedSvg className={mobile ? "mr-2" : null} /> {mobile && "Meu Feed"}
        </NavLink>
        <NavLink
          className={
            mobile
              ? ({ isActive }) =>
                  isActive ? mobileLinkActiveStyle : mobileLinkStyle
              : ({ isActive }) => (isActive ? linkActiveStyle : linkStyle)
          }
          to="/conta/insights"
        >
          <InsightsSvg className={mobile ? "mr-2" : null} />
          {mobile && "Insights"}
        </NavLink>
        <NavLink
          className={
            mobile
              ? ({ isActive }) =>
                  isActive ? mobileLinkActiveStyle : mobileLinkStyle
              : ({ isActive }) => (isActive ? linkActiveStyle : linkStyle)
          }
          to="/conta/post"
        >
          <PostSvg className={mobile ? "mr-2" : null} />
          {mobile && "Postar Foto"}
        </NavLink>
        <button
          className={
            mobile ? mobileLinkStyle.replace("border-b-[1px]", "") : linkStyle
          }
          onClick={userLogout}
        >
          <LogoutSvg className={mobile ? "mr-2" : null} />
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
const mobileActiveStyle =
  "flex h-10 w-10 cursor-pointer items-center justify-center rounded border-[1px] border-yellow-400 ring-4 ring-yellow-100 bg-white text-yellow-400 transition";

const linkBaseStyle =
  "flex h-10 w-10 cursor-pointer items-center justify-center rounded border-[1px] border-transparent bg-slate-100 transition";

const linkHoverStyle =
  "hover:border-gray-900 hover:bg-white hover:outline-none hover:ring-2 hover:ring-slate-100";

const linkFocusStyle = linkHoverStyle.replaceAll("hover", "focus");

const linkStyle = `${linkBaseStyle} ${linkHoverStyle} ${linkFocusStyle}`;

const linkActiveStyle =
  "flex h-10 w-10 cursor-pointer items-center justify-center rounded border-[1px] bg-white border-yellow-400 ring-4 ring-yellow-100 transition text-yellow-400";

const mobileLinkStyle =
  "flex w-full cursor-pointer items-center border-b-[1px] border-solid bg-transparent py-2 leading-none transition";
const mobileLinkActiveStyle = `${mobileLinkStyle} [&>svg]:text-yellow-400`;

export default UserHeaderNav;
