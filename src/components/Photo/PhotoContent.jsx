import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import Title from "../Geral/Title";
import PhotoComments from "./PhotoComments";
import { ReactComponent as ViewsSvg } from "../../assets/visualizacao-black.svg";
import PhotoCommentsForm from "./PhotoCommentsForm";

const PhotoContent = ({ data }) => {
  const { photo, comments } = data;
  return (
    <motion.div
      transition={{ duration: 0.2 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="mx-auto grid h-[36rem] grid-cols-[36rem_20rem] grid-rows-[auto_1fr_auto] overflow-hidden rounded-[.2rem] bg-white max-lg:h-auto max-lg:max-h-[calc(100vh-4rem)] max-lg:grid-cols-[minmax(20rem,_40rem)] max-lg:overflow-y-auto"
    >
      <div className="row-span-full max-lg:row-span-1">
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className="px-4 pt-4 pb-0">
        <div className="mb-4 flex justify-between opacity-50">
          <Link className="hover:underline" to={`/perfil/${photo.author}`}>
            @{photo.author}
          </Link>
          <span className="flex items-center [&>li]:mr-8">
            <ViewsSvg />
            {photo.acessos}
          </span>
        </div>
        <Title
          text={<Link to={`/photo/${photo.id}`}>{photo.title}</Link>}
          variant="primary"
        />
        <ul className="mt-4 mb-8 flex gap-x-8 text-lg font-bold">
          <li className="flex items-center before:mr-2 before:inline-block before:h-[20px] before:w-[4px] before:rounded-lg before:bg-yellow-400">
            {photo.peso}kg
          </li>
          <li className="flex items-center before:mr-2 before:inline-block before:h-[20px] before:w-[4px] before:rounded-lg before:bg-yellow-400">
            {photo.idade} {photo.idade === 1 ? "ano" : "anos"}
          </li>
        </ul>
        <PhotoComments id={photo.id} comments={comments} />
      </div>
    </motion.div>
  );
};

export default PhotoContent;
