import React from 'react';
import { motion } from 'framer-motion';

const MaintenanceAnimation = () => {
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

      {/* System Status Content */}
      <div className="p-3 flex gap-4">
        {/* Status Circles */}
        <div className="flex-1 grid grid-cols-2 gap-2">
          {[1, 2, 3, 4].map((_, index) => (
            <motion.div
              key={index}
              className="aspect-square rounded-full bg-gradient-to-tr from-[#6b2c84]/20 to-[#6b2c84]/10"
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1,
                delay: index * 0.2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Status Bars */}
        <div className="flex-1 space-y-2">
          {[1, 2, 3].map((_, index) => (
            <motion.div
              key={index}
              className="h-2 bg-[#6b2c84]/20 rounded-full overflow-hidden"
            >
              <motion.div
                className="h-full bg-gradient-to-r from-[#6b2c84]/40 to-[#6b2c84]/20"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{
                  duration: 1.5,
                  delay: index * 0.2,
                  repeat: Infinity,
                  repeatDelay: 1,
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

export default MaintenanceAnimation;