import { useEffect } from "react";
import { useState } from "react";

const getNewPercent = () => {
  return (
    Math.floor(
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
        100
    ) + "%"
  );
};

export const useProgress = () => {
  const [progress, setProgress] = useState("0%");

  useEffect(() => {
    const handleSroll = () => {
      setProgress(getNewPercent());
    };

    window.addEventListener("scroll", handleSroll);

    return () => {
      window.removeEventListener("scroll", handleSroll);
    };
  }, []);

  return progress;
};
