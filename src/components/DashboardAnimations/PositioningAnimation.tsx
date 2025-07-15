import React from 'react';
import { motion } from 'framer-motion';

const PositioningAnimation = () => {
  return (
    <div className="w-full h-32 relative bg-gradient-to-br from-slate-600/25 via-slate-700/20 to-slate-800/15 backdrop-blur-md rounded-lg overflow-hidden border border-slate-500/25">
      {/* Dark Metallic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-500/15 via-slate-600/10 to-slate-700/15"></div>

      {/* Strategic Positioning Grid */}
      <div className="h-full p-4 relative">
        {/* Market Grid */}
        <div className="absolute inset-4 grid grid-cols-4 grid-rows-3 gap-1">
          {Array.from({ length: 12 }).map((_, index) => (
            <motion.div
              key={index}
              className="bg-slate-500/15 rounded-sm border border-slate-400/25"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: [0.4, 0.9, 0.4],
                scale: [0.8, 1, 0.8],
                backgroundColor: index === 5 ? [
                  'rgba(100, 116, 139, 0.15)',
                  'rgba(107, 44, 132, 0.4)',
                  'rgba(100, 116, 139, 0.15)'
                ] : 'rgba(100, 116, 139, 0.15)'
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.1,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Strategic Position Marker */}
        <motion.div
          className="absolute w-6 h-6 rounded-full bg-gradient-to-br from-[#6b2c84]/70 to-[#6b2c84]/40 border-2 border-[#6b2c84]/50"
          style={{
            left: '45%',
            top: '40%',
          }}
          animate={{
            scale: [1, 1.3, 1],
            boxShadow: [
              '0 0 0 0 rgba(107, 44, 132, 0.5)',
              '0 0 0 12px rgba(107, 44, 132, 0.15)',
              '0 0 0 0 rgba(107, 44, 132, 0.5)'
            ]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Competitive Analysis Radar */}
        <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
          {/* Radar Sweep */}
          <motion.line
            x1="50%"
            y1="50%"
            x2="80%"
            y2="20%"
            stroke="rgba(107, 44, 132, 0.5)"
            strokeWidth="2"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ transformOrigin: '50% 50%' }}
          />
          
          {/* Market Boundaries */}
          <motion.circle
            cx="50%"
            cy="50%"
            r="30%"
            fill="none"
            stroke="rgba(100, 116, 139, 0.3)"
            strokeWidth="1"
            strokeDasharray="4 4"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: 20 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </svg>

        {/* Market Share Indicators */}
        <div className="absolute bottom-2 left-2 flex gap-1">
          {[1, 2, 3, 4].map((_, index) => (
            <motion.div
              key={index}
              className="w-1 bg-gradient-to-t from-slate-400/50 to-[#6b2c84]/40 rounded-full"
              style={{ height: `${(index + 1) * 6}px` }}
              animate={{
                scaleY: [0.5, 1.2, 0.5],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Positioning Arrows */}
        {[0, 1, 2].map((index) => {
          const positions = [
            { x: '20%', y: '30%', rotate: 45 },
            { x: '75%', y: '25%', rotate: -30 },
            { x: '30%', y: '70%', rotate: 120 }
          ];
          
          return (
            <motion.div
              key={index}
              className="absolute w-3 h-3"
              style={{
                left: positions[index].x,
                top: positions[index].y,
              }}
              animate={{
                rotate: [0, 360],
                scale: [0.8, 1.2, 0.8],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.8,
                ease: "easeInOut"
              }}
            >
              <div 
                className="w-full h-full bg-gradient-to-r from-slate-400/70 to-[#6b2c84]/50 rounded-full"
                style={{ transform: `rotate(${positions[index].rotate}deg)` }}
              />
            </motion.div>
          );
        })}

        {/* Success Metrics */}
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          {[1, 2].map((_, index) => (
            <motion.div
              key={index}
              className="w-8 h-1 bg-gradient-to-r from-slate-400/40 to-[#6b2c84]/50 rounded-full"
              animate={{
                scaleX: [0.3, 1, 0.3],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: index * 0.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PositioningAnimation;