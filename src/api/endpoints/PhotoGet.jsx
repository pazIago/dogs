import React, { useState } from "react";
import APIButton from "../../components/API/APIButton";

const PhotoGet = () => {
  const [id, setId] = useState("");
  const [photo, setPhoto] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    fetch(`https://dogsapi.origamid.dev/json/api/photo/${id}`)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        json.photo ? setPhoto(json.photo.src) : setPhoto("");
        return json;
      });
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-sm flex-col gap-2">
      <input
        placeholder="Id"
        type="text"
        className="w-full rounded-md border-2 border-solid border-blue-300 px-2 py-2 outline-0"
        value={id}
        onChange={({ target }) => setId(target.value)}
      />
      <APIButton />
      <img src={photo} alt="" />
    </form>
  );
};

export default PhotoGet;
