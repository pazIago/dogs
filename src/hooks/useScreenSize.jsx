import React, { useEffect, useState } from "react";

const useScreenSize = (size) => {
  const [match, setMatch] = useState(null);
  useEffect(() => {
    function changeMatch() {
      const screenSize = window.matchMedia(size);
      setMatch(screenSize.matches);
    }
    window.addEventListener("resize", changeMatch);
    return () => {
      window.removeEventListener("resize", changeMatch);
    };
  }, [size]);

  return match;
};

export default useScreenSize;
