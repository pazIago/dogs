import React, { useEffect, useState } from "react";
import { PHOTOS_GET } from "../../api/api-data";
import useFetch from "../../hooks/useFetch";
import FeedItem from "./FeedItem";
import Errortext from "../Geral/Errortext";
import Loading from "./Loading";

const FeedPhotos = ({ page, userData, setModalPhoto, setInfinite }) => {
  const { data, loading, errorMsg, request } = useFetch();
  const id = userData
    ? typeof userData === "string"
      ? userData
      : userData.id
    : 0;
  const [userFeed, setUserFeed] = useState();

  useEffect(() => {
    async function fetchPhotos() {
      const total = 3;
      const { url, options } = PHOTOS_GET({
        page,
        total,
        user: 0,
      });
      const { response, json } = await request(url, options);

      if (response && response.ok && json.length < total) {
        setInfinite(false);
      }

      const userPhotos = await Array.from(json);
      if (userData) {
        if (typeof userData === "object")
          setUserFeed(() =>
            userPhotos.filter((item) => item.author === userData.username)
          );
        else {
          setUserFeed(() =>
            userPhotos.filter((item) => item.author === userData)
          );
        }
      }
    }
    fetchPhotos();
  }, [request, userData, page, setInfinite]);

  if (errorMsg) return <Error error={errorMsg} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className="mb-4 grid grid-cols-3 justify-center gap-4 max-sm:grid-cols-2 ">
        {userData
          ? userFeed.map((photo, index) => (
              <FeedItem
                setModalPhoto={setModalPhoto}
                photo={photo}
                index={index}
                key={photo.id}
              />
            ))
          : data.map((photo, index) => (
              <FeedItem
                setModalPhoto={setModalPhoto}
                photo={photo}
                index={index}
                key={photo.id}
              />
            ))}
      </ul>
    );
  else return <Errortext error={errorMsg} />;
};

export default FeedPhotos;
