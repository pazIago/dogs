import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";

const PhotoComments = (props) => {
  const [comments, setComments] = useState(() => props.comments);
  const commentList = Object.values(comments).reverse();
  const { login } = useContext(UserContext);
  
  return (
    <>
      <ul className="overflow-y-scroll break-words px-8">
        {commentList.map((comment) => (
          <li key={comment.comment_ID} className="mb-2 leading-[1.2]">
            <b>{comment.comment_author}:</b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      <div>
        {login && <PhotoCommentsForm setComments={setComments} id={props.id} />}
      </div>
    </>
  );
};

export default PhotoComments;
