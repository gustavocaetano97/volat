import React from 'react';
import { motion } from 'framer-motion';

const LeadsAnimation = () => {
  return (
    <div className="w-full h-32 relative bg-black/30 rounded-lg overflow-hidden backdrop-blur-sm">
      {/* Gradient Corner */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#6b2c84]/10 to-transparent"></div>

      {/* Funnel Animation */}
      <div className="h-full p-3 flex items-center justify-center">
        <div className="relative w-24 h-24">
          {[1, 2, 3].map((_, index) => (
            <motion.div
              key={index}
              className="absolute left-1/2 -translate-x-1/2"
              style={{
                top: index * 28 + '%',
                width: (100 - index * 20) + '%',
                height: '4px',
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: index * 0.2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <div className="w-full h-full bg-gradient-to-r from-[#6b2c84]/40 via-[#6b2c84]/20 to-[#6b2c84]/40 rounded-full" />

              {/* Dots flowing down */}
              <motion.div
                className="absolute -top-1 w-2 h-2 rounded-full bg-[#6b2c84]/60"
                animate={{
                  x: ['0%', '100%'],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadsAnimation;