import React, { useContext } from "react";
import { motion } from "framer-motion";
import Title from "../../components/Title";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import useForm from "../../hooks/useForm";
import { USER_POST } from "../../api/api-data";
import { UserContext } from "../../context/UserContext";
import useFetch from "../../hooks/useFetch";
import Error from "../../components/Errortext";

const LoginCreate = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm("password");
  const { userLogin } = useContext(UserContext);
  const { loading, errorMsg, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    const { response, json } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <motion.section
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <Title text="Cadastre-se" variant="primary" />
      <form className="transition" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="E-mail" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled text="Carregando" />
        ) : (
          <Button text="Cadastrar" />
        )}
        <Error error={errorMsg} />
      </form>
    </motion.section>
  );
};

export default LoginCreate;
