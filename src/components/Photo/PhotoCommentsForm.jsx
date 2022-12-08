import React, { useState } from "react";
import { COMMENT_POST } from "../../api/api-data";
import { ReactComponent as BarkSvg } from "../../assets/enviar.svg";
import useFetch from "../../hooks/useFetch";
import Error from "../Geral/Errortext";

const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = useState("");
  const { request, errorMsg } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) setComments((comments) => [...comments, json]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={({ target }) => setComment(target.value)}
        name="comment"
        id="comment"
        placeholder="Escreva um comentário."
        cols="30"
        rows="10"
      />
      <button>
        <BarkSvg />
      </button>
      <Error error={errorMsg} />
    </form>
  );
};

export default PhotoCommentsForm;
