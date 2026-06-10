import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function TypingHeadline({ text }) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(text.slice(0, index + 1));
      index++;

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-4xl font-mono italic">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{
          repeat: Infinity,
          duration: 0.8,
        }}
      >
        |
      </motion.span>
    </h1>
  );
}
