import TypingHeadline from '@/components/headline-typing';
import { motion } from 'motion/react';
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from '@/components/ui/avatar';

function HomePage() {
  return (
    <div>
      <section className="flex flex-col py-24 px-6">
        <TypingHeadline text='forum-app.' />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-6 max-w-3xl text-sm text-muted-foreground leading-relaxed"
        >
          Welcome to Forum App, a place where ideas spark conversations and
          communities grow. Explore discussions across various topics, ask
          questions, share your experiences, and learn from others. Whether
          you're here to seek answers or contribute your knowledge, every voice
          has a place in the conversation.
        </motion.p>
        <motion.div
          className="flex flex-row flex-wrap items-center gap-6 md:gap-12 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <div className="flex gap-4 items-center">
            <Avatar>
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/89818889?v=4"
                alt="@afifrohul"
                className="grayscale"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <p className="text-xs text-muted-foreground">Created By</p>
              <a
                className="text-xs hover:underline transition-all duration-200"
                href="https://github.com/afifrohul"
                target="_blank"
              >
                Afif Rohul
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default HomePage;
