import React, { useState } from "react";
import APIButton from "../../components/APIButton";
import FormInput from "../../components/FormInput";

const TokenPost = () => {
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setToken(json.token);
        return json;
      });
  }

  return (
    <form className="flex max-w-sm flex-col gap-2" onSubmit={handleSubmit}>
      <FormInput
        type="text"
        id="username"
        placeHolder="username"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <FormInput
        type="text"
        id="password"
        placeHolder="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <APIButton />
      {token && <p>{token}</p>}
    </form>
  );
};

export default TokenPost;
