import React, { useEffect } from "react";
import { PHOTOS_GET } from "../../api/api-data";
import useFetch from "../../hooks/useFetch";
import FeedItem from "./FeedItem";
import Error from "../Geral/Errortext";
import Loading from "./Loading";

const FeedPhotos = ({ setModalPhoto }) => {
  const { data, loading, errorMsg, request } = useFetch();
  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);
    }
    fetchPhotos();
    console.log(data);
  }, [request]);

  if (errorMsg) return <Error error={errorMsg} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className="mb-4 grid grid-cols-3 justify-center gap-4 max-sm:grid-cols-2 ">
        {data.map((photo, index) => (
          <FeedItem
            setModalPhoto={setModalPhoto}
            photo={photo}
            index={index}
            key={photo.id}
          />
        ))}
      </ul>
    );
  else return <div>teste</div>;
};

export default FeedPhotos;
