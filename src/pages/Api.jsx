import React from "react";
import PhotoGet from "../api/endpoints/PhotoGet";
import PhotoPost from "../api/endpoints/PhotoPost";
import TokenPost from "../api/endpoints/TokenPost";
import UserPost from "../api/endpoints/UserPost";

const Api = () => {
  return (
    <div className="p-4">
      <h2>USERPOST</h2>
      <UserPost />
      <h2 className="mt-6">TOKENPOST</h2>
      <TokenPost />
      <h2 className="mt-6">PHOTOPOST</h2>
      <PhotoPost />
      <h2 className="mt-6">PHOTOGET</h2>
      <PhotoGet />
    </div>
  );
};

export default Api;
