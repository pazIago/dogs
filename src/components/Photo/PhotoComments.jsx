import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";

const PhotoComments = (props) => {
  const [comments, setComments] = useState(() => props.comments);
  const { login } = useContext(UserContext);
  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <b>{comment.comment_author}:</b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      <div>{login && <PhotoCommentsForm setComments={setComments} id={props.id} />}</div>
    </div>
  );
};

export default PhotoComments;
