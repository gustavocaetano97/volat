import React from 'react';
import { motion } from 'framer-motion';

const ConsultingAnimation = () => {
  return (
    <div className="w-full h-32 relative bg-black/30 rounded-lg overflow-hidden backdrop-blur-sm">
      {/* Gradient Corner */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#6b2c84]/10 to-transparent"></div>

      {/* Strategy Board */}
      <div className="h-full p-3 flex gap-3">
        {/* Connected Nodes */}
        <div className="relative flex-1">
          {[0, 1, 2].map((row) => (
            <div key={row} className="flex justify-between mt-4">
              {[0, 1].map((col) => (
                <motion.div
                  key={`${row}-${col}`}
                  className="w-3 h-3 rounded-full bg-[#6b2c84]/30"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: (row + col) * 0.2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          ))}

          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
            <motion.path
              d="M 10 10 L 90 30 L 10 50 L 90 70"
              stroke="rgba(107, 44, 132, 0.2)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </svg>
        </div>

        {/* Progress Indicators */}
        <div className="flex-1 space-y-2">
          {[1, 2, 3].map((_, index) => (
            <motion.div
              key={index}
              className="h-2 rounded-full overflow-hidden bg-white/10"
            >
              <motion.div
                className="h-full bg-gradient-to-r from-[#6b2c84]/40 to-[#6b2c84]/20"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 1.5,
                  delay: index * 0.3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConsultingAnimation;