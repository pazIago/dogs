import React, { useEffect, useState } from "react";
import { PASSWORD_RESET } from "../../api/api-data";
import Button from "../../components/Form/Button";
import Input from "../../components/Form/Input";
import useFetch from "../../hooks/useFetch";
import useForm from "../../hooks/useForm";
import Title from "../../components/Geral/Title";
import Errortext from "../../components/Geral/Errortext";
import { useNavigate } from "react-router-dom";
import Head from "../../components/Geral/Head";
import { motion } from "framer-motion";

const LoginReset = () => {
  const [login, setLogin] = useState();
  const [key, setKey] = useState();
  const password = useForm();
  const { errorMsg, loading, request } = useFetch();
  const goTo = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");

    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) goTo("/login");
    }
  }
  
  return (
    <motion.section
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      <Head title="Resete sua Senha" />
      <Title text="Resete a Senha" />
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova Senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled text="Resetando..." />
        ) : (
          <Button text="Resetar" />
        )}
      </form>
      <Errortext error={errorMsg} />
    </motion.section>
  );
};

export default LoginReset;
