import React from "react";
import { useParams } from "react-router-dom";
import Feed from "../../components/Feed/Feed";
import Title from "../../components/Geral/Title";

const UserProfile = () => {
  const { username } = useParams();

  return (
    <section className="mx-auto w-4/5 max-w-[800px]">
      <Title variant="primary" text={username} />
      <div className="mt-8"><Feed userData={username} /></div>
    </section>
  );
};

export default UserProfile;
