import React, { useContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import LoginCreate from "./Login/LoginCreate";
import LoginForm from "./Login/LoginForm";
import LoginLost from "./Login/LoginLost";
import LoginReset from "./Login/LoginReset";
import loginImg from "../assets/login.jpg";

const Login = () => {
  const { login } = useContext(UserContext);
  const goTo = useNavigate();

  if (login === true) goTo("/conta");

  return (
    <section className="grid min-h-screen grid-cols-2 gap-8 max-sm:block">
      <img
        src={loginImg}
        className="h-full object-cover object-center max-sm:hidden"
        alt=""
      />
      <div className="max-w-lg p-8 max-sm:mx-auto max-sm:py-4">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="create" element={<LoginCreate />} />
          <Route path="lost" element={<LoginLost />} />
          <Route path="reset" element={<LoginReset />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
