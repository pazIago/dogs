import React from "react";
import { motion } from "framer-motion";

const Error = ({ error }) => {
  if (!error) return null;
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <p className="text-red-500 py-4">{error}</p>
    </motion.div>
  );
};

export default Error;
