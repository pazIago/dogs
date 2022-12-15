import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import useForm from "../../hooks/useForm";
import { UserContext } from "../../context/UserContext";
import { motion } from "framer-motion";
import Error from "../../components/Geral/Errortext";
import Title from "../../components/Geral/Title";
import Subtitle from "../../components/Geral/Subtitle";
import Head from "../../components/Geral/Head";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <Head title="Login" />
      <Title variant="primary" text="Login" />
      <form className="mb-8 flex flex-col gap-1" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled text="Carregando" />
        ) : (
          <Button text="Entrar" />
        )}

        <Error error={error} />
      </form>
      <Link
        className="inline-block py-2 leading-none text-gray-600 after:block after:h-[2px] after:w-full after:bg-current"
        to="/login/lost"
      >
        Perdeu a senha?
      </Link>

      <div className="mt-16">
        <Subtitle variant="primary" text="Cadastre-se" />
        <p className="my-8">Ainda não possui conta? Cadastre-se no site!</p>
        <Link
          className={`${baseButtonStyle} ${hoverButtonStyle} ${focusButtonStyle}`}
          to="/login/create"
        >
          Cadastro
        </Link>
      </div>
    </motion.section>
  );
};

const baseButtonStyle =
  "pointer box-border min-w-[8rem] rounded-lg bg-yellow-400 px-5 py-5 font-primary font-bold text-yellow-800 border-[3px] border-yellow-400 transition";

const hoverButtonStyle =
  "hover:outline-none hover:border-[3px] hover:border-yellow-100 hover:ring-[1px] hover:ring-yellow-400";

const focusButtonStyle = hoverButtonStyle.replaceAll("hover", "focus");

export default LoginForm;
