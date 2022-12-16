import React, { useContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import LoginCreate from "./LoginCreate";
import LoginForm from "./LoginForm";
import LoginLost from "./LoginLost";
import LoginReset from "./LoginReset";
import loginImg from "../../assets/login.jpg";
import NotFound from "../NotFound";

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
      <div className="max-w-lg mt-[20vh] p-8 max-sm:mx-auto max-sm:py-4">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="create" element={<LoginCreate />} />
          <Route path="lost" element={<LoginLost />} />
          <Route path="reset" element={<LoginReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
