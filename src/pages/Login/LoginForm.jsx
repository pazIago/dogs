import React from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import useForm from "../../hooks/useForm";
import { TOKEN_POST } from "../../api/api-data";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST(username.value, password.value);

      fetch(url, options)
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((json) => {
          console.log(json);
          return json;
        });
    }
  }

  return (
    <section>
      <h1 className="mb-2 text-3xl font-bold">Login</h1>
      <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button text="Entrar" />
      </form>
      <Link to="/login/create">Criar</Link>
    </section>
  );
};

export default LoginForm;
