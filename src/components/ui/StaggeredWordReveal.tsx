import React from 'react';
import { motion } from 'motion/react';

interface StaggeredWordRevealProps {
  text: string;
  className?: string;
  delayOffset?: number;
}

export const StaggeredWordReveal = ({ text, className, delayOffset = 0 }: StaggeredWordRevealProps) => {
  const words = text.split(" ");
  
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(10px)", y: 40 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.8,
            delay: delayOffset + i * 0.1,
            ease: [0.2, 0.65, 0.3, 0.9]
          }}
          className="inline-block mr-[0.25em] last:mr-0"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};
