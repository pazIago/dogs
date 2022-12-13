import { motion } from "framer-motion";
import React from "react";
import { ReactComponent as ViewsSvg } from "../../assets/visualizacao.svg";
import Image from "../Geral/Image";

const FeedItem = ({ photo, setModalPhoto, index }) => {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <li
      className="grid cursor-pointer sm:[&:nth-child(2)]:col-[2/4] sm:[&:nth-child(2)]:row-span-2"
      onClick={handleClick}
    >
      <Image
        src={photo.src}
        alt={photo.title}
        className="col-start-1 row-start-1 aspect-square h-full rounded-md object-cover object-center"
      />
      <span className="col-start-1 row-start-1 flex items-center justify-center rounded-md bg-black bg-opacity-30 text-center text-white opacity-0 transition hover:opacity-100">
        <ViewsSvg className="mr-1 inline-block" /> {photo.acessos}
      </span>
    </li>
  );
};

export default FeedItem;
