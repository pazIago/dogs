import React, { useState } from "react";
import APIButton from "../../components/APIButton";
import FormInput from "../../components/FormInput";

const PhotoPost = () => {
  const [token, setToken] = useState("");
  const [nome, setNome] = useState("");
  const [peso, setPeso] = useState("");
  const [idade, setIdade] = useState("");
  const [img, setImg] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("img", img);
    formData.append("nome", nome);
    formData.append("peso", peso);
    formData.append("idade", idade);

    fetch("https://dogsapi.origamid.dev/json/api/photo", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
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
        id="token"
        placeHolder="token"
        value={token}
        onChange={({ target }) => setToken(target.value)}
      />
      <FormInput
        type="text"
        id="nome"
        placeHolder="nome"
        value={nome}
        onChange={({ target }) => setNome(target.value)}
      />
      <FormInput
        type="text"
        id="peso"
        placeHolder="peso"
        value={peso}
        onChange={({ target }) => setPeso(target.value)}
      />
      <FormInput
        type="text"
        id="idade"
        placeHolder="idade"
        value={idade}
        onChange={({ target }) => setIdade(target.value)}
      />
      <input
        type="file"
        id="img"
        onChange={({ target }) => setImg(target.files[0])}
      />

      <APIButton />
    </form>
  );
};

export default PhotoPost;
