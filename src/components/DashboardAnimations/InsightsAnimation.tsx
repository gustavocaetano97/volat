import React from 'react';
import { motion } from 'framer-motion';

const InsightsAnimation = () => {
  return (
    <div className="w-full h-32 relative bg-black/30 rounded-lg overflow-hidden backdrop-blur-sm">
      {/* Gradient Corner */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#6b2c84]/10 to-transparent"></div>

      {/* Data Visualization */}
      <div className="h-full p-3 flex gap-3">
        {/* Circular Progress */}
        <div className="relative w-20 h-20 flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 50 50">
            <motion.circle
              cx="25"
              cy="25"
              r="20"
              fill="none"
              stroke="rgba(107, 44, 132, 0.2)"
              strokeWidth="4"
            />
            <motion.circle
              cx="25"
              cy="25"
              r="20"
              fill="none"
              stroke="rgba(107, 44, 132, 0.2)"
              strokeWidth="4"
              strokeDasharray="125.6"
              initial={{ strokeDashoffset: 125.6 }}
              animate={{ strokeDashoffset: 20 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          </svg>
          <motion.div
            className="absolute w-2 h-2 bg-[#6b2c84] rounded-full"
            style={{ boxShadow: '0 0 10px rgba(107, 44, 132, 0.2)' }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Data Points */}
        <div className="flex-1 grid grid-cols-2 gap-2">
          {[1, 2, 3, 4].map((_, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-r from-[#6b2c84]/20 to-[#6b2c84]/10 rounded"
              initial={{ height: 0 }}
              animate={{ height: [20, 40, 20] }}
              transition={{
                duration: 2,
                delay: index * 0.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsightsAnimation;