import React from 'react';
import { motion } from 'framer-motion';

const AnalyticsAnimation = () => {
  return (
    <div className="w-full h-32 relative bg-black/30 rounded-lg overflow-hidden backdrop-blur-sm">
      {/* Gradient Corner */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#6b2c84]/10 to-transparent"></div>

      {/* Top Bar */}
      <div className="h-6 bg-white/10 flex items-center px-2 gap-1.5">
        <div className="w-2 h-2 rounded-full bg-red-500/30"></div>
        <div className="w-2 h-2 rounded-full bg-yellow-500/30"></div>
        <div className="w-2 h-2 rounded-full bg-green-500/30"></div>
      </div>

      {/* Dashboard Content */}
      <div className="p-3 flex gap-3">
        {/* Growing Line Chart */}
        <div className="flex-1 h-20 relative">
          <svg className="w-full h-full">
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut"
              }}
              d="M 0 80 Q 40 60, 80 40 T 160 10"
              stroke="rgba(107, 44, 132, 0.2)"
              strokeWidth="2"
              fill="none"
              className="drop-shadow-[0_0_2px_rgba(107, 44, 132, 0.2)]"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut",
                delay: 0.5
              }}
              d="M 0 80 Q 40 60, 80 40 T 160 10"
              stroke="rgba(107, 44, 132, 0.2)"
              strokeWidth="6"
              fill="none"
            />
          </svg>
        </div>

        {/* Stats Panel */}
        <div className="flex-1 space-y-2">
          <motion.div
            className="h-2 bg-gradient-to-r from-[#6b2c84]/40 to-[#6b2c84]/10 rounded"
            initial={{ width: "0%" }}
            animate={{ width: "75%" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 1,
              ease: "easeInOut"
            }}
          />

          {[1, 2].map((_, index) => (
            <motion.div
              key={index}
              className="h-1.5 bg-white/10 rounded"
              initial={{ width: "0%" }}
              animate={{ width: ["0%", "100%", "60%"] }}
              transition={{
                duration: 2,
                times: [0, 0.7, 1],
                delay: index * 0.3,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsAnimation;