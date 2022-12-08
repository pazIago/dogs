import React, { useEffect } from "react";
import { PHOTO_GET } from "../../api/api-data";
import useFetch from "../../hooks/useFetch";
import Error from "../Geral/Errortext";
import Loading from "./Loading";
import PhotoContent from "../Photo/PhotoContent";

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, errorMsg, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick({ target, currentTarget }) {
    if (target === currentTarget) setModalPhoto(null);
  }

  return (
    <div
      className="fixed -top-[0] left-0 z-50 flex h-[100vh] w-screen bg-black bg-opacity-40 px-16 py-8 max-sm:px-8"
      onClick={handleOutsideClick}
    >
      {errorMsg && <Error error={errorMsg} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
