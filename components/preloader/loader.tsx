"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { opacity, slideUp } from "./anim";
import { usePreloader } from "./index";
import styles from "./style.module.css";

const steps = [
  "10%",
  "20%",
  "30%",
  "40%",
  "50%",
  "60%",
  "70%",
  "80%",
  "90%",
  "100%",
];

export default function Loader() {
  const { isLoading, loadingPercent, bypassLoading } = usePreloader();
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;
    
    setMounted(true);
    const updateDimension = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    updateDimension();
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  }, []);

  useEffect(() => {
    if (index == steps.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 150
    );
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;

  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  // Don't render until mounted and dimensions are set
  if (!mounted || dimension.width === 0) {
    return null;
  }

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={styles.introduction}
      onClick={bypassLoading}
      style={{ cursor: "pointer" }}
    >
      <motion.p variants={opacity} initial="initial" animate="enter">
        {(loadingPercent - (loadingPercent % 5)).toFixed(0)} %
      </motion.p>
      <motion.div
        className={styles.skipHint}
        variants={opacity}
        initial="initial"
        animate="enter"
        transition={{ delay: 1 }}
      >
        Click or press any key to skip
      </motion.div>
      <svg>
        <motion.path
          variants={curve}
          initial="initial"
          exit="exit"
        ></motion.path>
      </svg>
    </motion.div>
  );
}

