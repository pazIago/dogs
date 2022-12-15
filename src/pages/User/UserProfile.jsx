import React from "react";
import { useParams } from "react-router-dom";
import Feed from "../../components/Feed/Feed";
import Head from "../../components/Geral/Head";
import Title from "../../components/Geral/Title";

const UserProfile = () => {
  const { username } = useParams();

  return (
    <section className="mx-auto w-4/5 max-w-[800px]">
      <Head title={username} description="A rede social para o seu doguinho!" />

      <Title variant="primary" text={username} />
      <div className="mt-8">
        <Feed userData={username} />
      </div>
    </section>
  );
};

export default UserProfile;
