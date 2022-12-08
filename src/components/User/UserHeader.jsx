import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Title from "../Title";
import UserHeaderNav from "./UserHeaderNav";

const UserHeader = () => {
  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/conta/insights":
        setTitle("Insights");
        break;
      case "/conta/post":
        setTitle("Poste sua Foto");
        break;

      default:
        setTitle('Minha Conta');
        break;
    }
  }, [location]);

  return (
    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
      <header className="relative mb-8 mt-4 grid grid-cols-[1fr,auto] items-center">
        <Title variant="primary" text={title} />
        <UserHeaderNav />
      </header>
    </motion.div>
  );
};

export default UserHeader;
