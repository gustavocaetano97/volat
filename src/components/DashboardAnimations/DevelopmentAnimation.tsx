import React from 'react';
import { motion } from 'framer-motion';

const DevelopmentAnimation = () => {
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

      {/* Code Editor Content */}
      <div className="p-3">
        <div className="space-y-2">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="flex items-center gap-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.2,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
                className="w-8 h-1.5 bg-[#6b2c84]/30 rounded"
              />
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: ["0%", "100%"] }}
                transition={{
                  duration: 1,
                  delay: index * 0.2,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut"
                }}
                className="h-1.5 bg-gradient-to-r from-white/20 to-white/10 rounded"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevelopmentAnimation;