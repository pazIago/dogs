import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Feed from "../../components/Feed/Feed";
import Head from "../../components/Geral/Head";
import UserHeader from "../../components/User/UserHeader";
import { UserContext } from "../../context/UserContext";
import NotFound from "../NotFound";
import UserInsights from "./UserInsights";
import UserPhotoPost from "./UserPhotoPost";

const User = () => {
  const { userData } = useContext(UserContext);
  return (
    <section className="mx-auto w-4/5 max-w-[800px]">
      <Head title="Meu Perfil" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed userData={userData} />} />
        <Route path="post" element={<UserPhotoPost />} />
        <Route path="insights" element={<UserInsights />} />
        <Route path="*" element={<NotFound />} />
        <Route />
      </Routes>
    </section>
  );
};

export default User;
