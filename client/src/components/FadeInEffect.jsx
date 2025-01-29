import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "motion/react";

const FadeInEffect = ({ delay, children, translateY = 90 }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: "some",
    margin: "-20%",
  });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);
  return (
    <motion.div
      ref={sectionRef}
      variants={{
        hidden: { opacity: 0, translateY: translateY },
        visible: { opacity: 1, translateY: 0 },
      }}
      transition={{
        duration: 1,
        damping: 8,
        delay: delay,
        stiffness: 100,
        ease: "easeOut",
      }}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default FadeInEffect;
