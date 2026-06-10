import ThreadItem from '@/components/thread-item';
import { motion } from 'motion/react';

export default function ThreadList({ threads, upVote, downVote, neutralVote }) {
  if (threads.length <= 0) {
    return (
      <div className="space-y-4 mt-3">
        <p className="text-xs text-center">Thread not found</p>
      </div>
    );
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.1,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      className="space-y-4 mt-3"
      initial="hidden"
      animate="show"
      variants={container}
    >
      {threads.map((thread, index) => (
        <motion.div key={index} variants={child}>
          <ThreadItem
            thread={thread}
            upVote={upVote}
            downVote={downVote}
            neutralVote={neutralVote}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
