import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "../api/api-data";

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const local = window.localStorage;
  const goTo = useNavigate();
  const [userData, setUserData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function autoLogin() {
      const token = local.getItem("token");
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error("Token Inválido");
          await getUser(token);
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, []);

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setUserData(json);
    setLogin(true);
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const responseToken = await fetch(url, options);
      if (!responseToken.ok)
        throw new Error(
          `Error:${responseToken.status} ${
            responseToken.statusText ? "- " + responseToken.statusText : ""
          }`
        );
      const { token } = await responseToken.json();
      local.setItem("token", token);
      await getUser(token);
      goTo("/conta");
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  async function userLogout() {
    setUserData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    local.removeItem("token");
    goTo("/login");
  }

  return (
    <UserContext.Provider
      value={{ userLogin, userData, userLogout, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
