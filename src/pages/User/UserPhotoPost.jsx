import { motion } from "framer-motion";
import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";
import Button from "../../components/Form/Button";
import Input from "../../components/Form/Input";
import React, { useEffect, useState } from "react";
import { PHOTO_POST } from "../../api/api-data";
import Error from "../../components/Geral/Errortext";
import { useNavigate } from "react-router-dom";

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = useState({});
  const { data, errorMsg, loading, request } = useFetch();
  const goTo = useNavigate();

  useEffect(() => {
    data ? goTo("/conta") : null;
  }, [data, goTo]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    const { url, options } = PHOTO_POST(formData);
    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <motion.section
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="mb-8 grid grid-cols-2 items-center gap-8 max-sm:grid-cols-1"
    >
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <input
          className="mb-4 "
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />
          {loading ? (
            <Button text="Enviando..." disabled />
          ) : (
            <Button text="Enviar" />
          )}
          {errorMsg && <Error error={errorMsg} />}
      </form>

      <div>
        {img.preview && (
          <img
            className="aspect-square rounded-2xl object-cover object-center"
            src={img.preview}
          />
        )}
      </div>
    </motion.section>
  );
};

export default UserPhotoPost;
