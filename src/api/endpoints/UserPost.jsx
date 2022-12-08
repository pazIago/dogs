import React, { useState } from "react";
import APIButton from "../../components/API/APIButton";
import FormInput from "../../components/API/FormInput";

const UserPost = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://dogsapi.origamid.dev/json/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }

  return (
    <form className="flex flex-col gap-2 max-w-sm" onSubmit={handleSubmit}>
      <FormInput
        type="text"
        id="username"
        placeHolder="username"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <FormInput
        type="text"
        id="email"
        placeHolder="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <FormInput
        type="text"
        id="password"
        placeHolder="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <APIButton />
    </form>
  );
};

export default UserPost;
