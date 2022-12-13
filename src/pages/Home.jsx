import { motion } from "framer-motion";
import React from "react";
import Feed from "../components/Feed/Feed";

const Home = () => {
  return (
    <motion.section className="mx-auto mt-8 w-4/5 max-w-[800px]">
      <Feed />
    </motion.section>
  );
};

export default Home;
