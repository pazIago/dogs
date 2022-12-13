import { motion } from "framer-motion";
import React, { useState } from "react";
const Image = ({ alt, ...props }) => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  function handleLoad() {
    setVisible(true);
    setLoading(false);
  }

  return (
    <div className="grid col-start-1 row-start-1 h-full">
      {loading && (
        <motion.div
          initial={{
            backgroundImage:
              "linear-gradient(90deg,#eee 0px,#fff 50%,#eee 100%)",
            backgroundSize: "200%",
            backgroundPositionX: "0px",
          }}
          animate={{
            backgroundPositionX: "-200%",
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="col-start-1 row-start-1 h-full"
        ></motion.div>
      )}
      <img
        onLoad={handleLoad}
        className={`block max-w-full transition ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        alt={alt}
        {...props}
      />
    </div>
  );
};

export default Image;
