import React from 'react';
import { motion } from 'framer-motion';

const AutomationAnimation = () => {
  return (
    <div className="w-full h-32 relative bg-gradient-to-br from-slate-600/25 via-slate-700/20 to-slate-800/15 backdrop-blur-md rounded-lg overflow-hidden border border-slate-500/25">
      {/* Dark Metallic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-500/15 via-slate-600/10 to-slate-700/15"></div>

      {/* Automation Flow Network */}
      <div className="h-full p-4 relative">
        {/* Central Processing Hub */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6b2c84]/50 to-[#6b2c84]/25 border border-[#6b2c84]/40"
            animate={{
              scale: [1, 1.2, 1],
              boxShadow: [
                '0 0 0 0 rgba(107, 44, 132, 0.5)',
                '0 0 0 8px rgba(107, 44, 132, 0.15)',
                '0 0 0 0 rgba(107, 44, 132, 0.5)'
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Orbiting Data Nodes */}
        {[0, 1, 2, 3].map((index) => {
          const angle = (index * 90) * (Math.PI / 180);
          const radius = 35;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          return (
            <motion.div
              key={index}
              className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-slate-400/70 to-slate-500/50"
              style={{
                left: '50%',
                top: '50%',
                marginLeft: x - 6,
                marginTop: y - 6,
              }}
              animate={{
                rotate: 360,
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                rotate: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                },
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.5,
                  ease: "easeInOut"
                }
              }}
            />
          );
        })}

        {/* Data Flow Lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
          {[0, 1, 2, 3].map((index) => {
            const angle = (index * 90) * (Math.PI / 180);
            const radius = 35;
            const x1 = 50 + Math.cos(angle) * 15;
            const y1 = 50 + Math.sin(angle) * 15;
            const x2 = 50 + Math.cos(angle) * radius;
            const y2 = 50 + Math.sin(angle) * radius;
            
            return (
              <motion.line
                key={index}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="rgba(107, 44, 132, 0.4)"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 0], 
                  opacity: [0, 0.9, 0] 
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                  ease: "easeInOut"
                }}
              />
            );
          })}
        </svg>

        {/* Processing Indicators */}
        <div className="absolute bottom-2 left-2 flex gap-1">
          {[1, 2, 3].map((_, index) => (
            <motion.div
              key={index}
              className="w-1 h-4 bg-gradient-to-t from-[#6b2c84]/50 to-slate-400/40 rounded-full"
              animate={{
                scaleY: [0.3, 1, 0.3],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Status Indicator */}
        <div className="absolute top-2 right-2">
          <motion.div
            className="w-2 h-2 rounded-full bg-green-400/70"
            animate={{
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AutomationAnimation;