import React, { useEffect, useState } from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";

const Feed = ({ userData }) => {
  const [modalPhoto, setModalPhoto] = useState(null);
  const [pages, setPages] = useState([1]);
  const [infinite, setInfinite] = useState(true);

  useEffect(() => {
    let cooldown = false;

    function infiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const screenH = document.body.offsetHeight - window.innerHeight;
        if (scroll > screenH * 0.9 && !cooldown) {
          cooldown = true;
          setPages((pages) => [...pages, pages.length + 1]);
          console.log("ativou");
          setTimeout(() => {
            cooldown = false;
          }, 500);
        }
      }
    }

    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);
    return () => {
      window.removeEventListener("scroll", infiniteScroll);
      window.removeEventListener("wheel", infiniteScroll);
    };
  }, [infinite]);

  return (
    <div className="min-h-screen">
      {modalPhoto && (
        <FeedModal setModalPhoto={setModalPhoto} photo={modalPhoto} />
      )}
      {pages.map((page) => (
        <FeedPhotos
          key={page}
          userData={userData}
          page={page}
          setModalPhoto={setModalPhoto}
          setInfinite={setInfinite}
        />
      ))}
    </div>
  );
};

export default Feed;
