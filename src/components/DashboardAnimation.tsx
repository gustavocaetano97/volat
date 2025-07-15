import React from 'react';
import { motion } from 'framer-motion';

const DashboardAnimation = () => {
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
        {/* Bar Chart */}
        <div className="flex-1 flex items-end gap-1.5 h-20">
          {[60, 80, 40, 90].map((height, index) => (
            <motion.div
              key={index}
              className="flex-1 bg-white/10 rounded-t"
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{
                duration: 2,
                delay: index * 0.3,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 2,
                ease: "easeInOut"
              }}
            >
              <motion.div
                className="w-full bg-gradient-to-t from-[#6b2c84]/40 to-[#6b2c84]/20 rounded-t"
                initial={{ height: "0%" }}
                animate={{ height: "100%" }}
                transition={{
                  duration: 1.5,
                  delay: index * 0.3 + 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 2.5,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Right Panel */}
        <div className="flex-1 space-y-2">
          {/* Header Line */}
          <motion.div
            className="h-2 bg-gradient-to-r from-white/40 to-white/20 rounded w-3/4"
            initial={{ width: "0%" }}
            animate={{ width: "75%" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 2,
              ease: "easeInOut"
            }}
          />

          {/* Content Lines */}
          {[1, 2, 3].map((_, index) => (
            <motion.div
              key={index}
              className="h-1.5 bg-white/10 rounded"
              initial={{ width: "0%" }}
              animate={{ width: ["0%", "100%", "60%"] }}
              transition={{
                duration: 3,
                times: [0, 0.7, 1],
                delay: index * 0.4,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardAnimation;