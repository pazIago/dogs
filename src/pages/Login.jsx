import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginCreate from "./Login/LoginCreate";
import LoginForm from "./Login/LoginForm";
import LoginLost from "./Login/LoginLost";
import LoginReset from "./Login/LoginReset";

const Login = () => {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="create" element={<LoginCreate />} />
        <Route path="lost" element={<LoginLost />} />
        <Route path="reset" element={<LoginReset />} />
      </Routes>
    </div>
  );
};

export default Login;
