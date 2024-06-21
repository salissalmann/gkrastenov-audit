"use client";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

const MotionDiv = ({
  children,
  className,
  x1 = "0",
  x2 = "-50%",
  y1 = "0",
  y2 = "0",
  index = 0,
  ...props
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const variants = {
    visible: {
      opacity: 1,
      transition: {
        ease: [0.83, 0, 0.17, 1],
        duration: 0.9,
        staggerChildren: 1,
        delay: index * 0.1,
      },
      x: x1,
      y1: y1,
    },
    hidden: {
      opacity: 0,
      transition: {
        ease: [0.83, 0, 0.17, 1],
        duration: 0.5,
        staggerChildren: 0.5,
        delay: 0.5,
      },
      x: x2,
      y: y2,
    },
  };
  return (
    <motion.div
      ref={ref}
      className={className}
      animate={isInView ? "visible" : "hidden"}
      transition={{
        ease: [0.83, 0, 0.17, 1],
        duration: 0.5,
      }}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
