import React from 'react';
import { motion } from 'framer-motion';

const ContentAnimation = () => {
  return (
    <div className="w-full h-32 relative bg-black/30 rounded-lg overflow-hidden backdrop-blur-sm">
      {/* Gradient Corner */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#6b2c84]/10 to-transparent"></div>

      {/* Content Editor */}
      <div className="h-full p-3 flex flex-col gap-2">
        {/* Title */}
        <motion.div
          className="h-2 w-3/4 bg-gradient-to-r from-[#6b2c84]/30 to-[#6b2c84]/10 rounded"
          initial={{ width: "0%" }}
          animate={{ width: "75%" }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut"
          }}
        />

        {/* Content Lines */}
        {[1, 2, 3].map((_, index) => (
          <motion.div
            key={index}
            className="flex gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              repeat: Infinity,
              repeatDelay: 2
            }}
          >
            <motion.div
              className="h-1.5 bg-white/10 rounded flex-1"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 1,
                delay: index * 0.2,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        ))}

        {/* Writing Cursor */}
        <motion.div
          className="w-0.5 h-3 bg-[#6b2c84] mt-1"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      </div>
    </div>
  );
};

export default ContentAnimation;