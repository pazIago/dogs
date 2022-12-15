import React from "react";
import { PASSWORD_LOST } from "../../api/api-data";
import Button from "../../components/Form/Button";
import Input from "../../components/Form/Input";
import Title from "../../components/Geral/Title";
import useFetch from "../../hooks/useFetch";
import useForm from "../../hooks/useForm";
import Errortext from "../../components/Geral/Errortext";

const LoginLost = () => {
  const login = useForm();
  const { data, errorMsg, loading, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("lost", "reset"),
      });
      const { json } = await request(url, options);
    }
  }

  return (
    <section className="space-y-8">
      <Title text="Perdeu a senha?" />

      {data ? (
        <p className="text-green-500">{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input type="text" label="Email/ Usuário" name="login" {...login} />
          {loading ? (
            <Button disabled text="Enviando..." />
          ) : (
            <Button text="Enviar" />
          )}
          <Errortext error={errorMsg} />
        </form>
      )}
    </section>
  );
};

export default LoginLost;
