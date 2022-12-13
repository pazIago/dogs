import { motion } from "framer-motion";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Title from "../Geral/Title";
import PhotoComments from "./PhotoComments";
import { UserContext } from "../../context/UserContext";
import { ReactComponent as ViewsSvg } from "../../assets/visualizacao-black.svg";
import PhotoDelete from "./PhotoDelete";
import Image from "../Geral/Image";

const PhotoContent = ({ data, single }) => {
  const { photo, comments } = data;
  const { userData } = useContext(UserContext);

  return (
    <motion.div
      transition={{ duration: 0.2 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`mx-auto grid 
      ${single ? "h-auto grid-cols-1 mb-4" : "h-[36rem] grid-cols-[36rem_20rem]"} 
    grid-rows-[auto_1fr_auto] overflow-hidden rounded-[.2rem] bg-white max-lg:h-auto max-lg:max-h-[calc(100vh-4rem)] max-lg:grid-cols-[minmax(20rem,_40rem)] max-lg:overflow-y-auto`}
    >
      <div
        className={`${
          single ? "row-start-1 overflow-hidden rounded-md" : "row-span-full"
        } max-lg:row-span-1`}
      >
        <Image
          className={`h-full object-cover object-center`}
          src={photo.src}
          alt={photo.title}
        />
      </div>
      <div className={`${single ? "pt-4" : "px-8 pt-8 pb-4"}`}>
        <div className="mb-4 flex justify-between opacity-50">
          {userData && userData.username === photo.author ? (
            <PhotoDelete id={photo.id} />
          ) : (
            <Link className="hover:underline" to={`/user/${photo.author}`}>
              @{photo.author}
            </Link>
          )}
          <span className="flex items-center">
            <ViewsSvg className="mr-1" />
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
      </div>
      <PhotoComments single={single} id={photo.id} comments={comments} />
    </motion.div>
  );
};

export default PhotoContent;
