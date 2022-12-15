import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PHOTO_GET } from "../../api/api-data";
import useFetch from "../../hooks/useFetch";
import Loading from "../Feed/Loading";
import Errortext from "../Geral/Errortext";
import Head from "../Geral/Head";
import PhotoContent from "./PhotoContent";

const Photo = () => {
  const { id } = useParams();
  const { data, errorMsg, request, loading } = useFetch();

  useEffect(() => {
    const { url } = PHOTO_GET(id);
    request(url);
  }, []);

  if (errorMsg) return <Errortext error={errorMsg} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="mx-auto mt-8 min-h-screen max-w-[50rem] px-4">
        <Head title={data.photo.title} />
        <PhotoContent single data={data} />
      </section>
    );
  else return null;
};

export default Photo;
