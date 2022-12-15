import { motion } from "framer-motion";
import React from "react";
import Feed from "../components/Feed/Feed";
import Head from "../components/Geral/Head";

const Home = () => {
  return (
    <motion.section className="mx-auto mt-8 w-4/5 max-w-[800px]">
      <Head title="Home" description="A rede social para o seu doguinho!" />
      <Feed />
    </motion.section>
  );
};

export default Home;
