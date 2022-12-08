import React from "react";
import { Routes, Route } from "react-router-dom";
import Feed from "../../components/Feed/Feed";
import UserHeader from "../../components/User/UserHeader";
import UserInsights from "./UserInsights";
import UserPhotoPost from "./UserPhotoPost";

const User = () => {
  return (
    <section className="mx-auto w-4/5 max-w-[800px]">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="post" element={<UserPhotoPost />} />
        <Route path="insights" element={<UserInsights />} />
        <Route />
      </Routes>
    </section>
  );
};

export default User;
