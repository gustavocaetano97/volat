import React from 'react';
import { motion } from 'framer-motion';

const ChatbotAnimation = () => {
  return (
    <div className="w-full h-32 relative bg-black/30 rounded-lg overflow-hidden backdrop-blur-sm">


      {/* Chat Interface */}
      <div className="h-full p-3 flex flex-col gap-2">
        {/* Chat Messages */}
        {[1, 2, 3].map((_, index) => (
          <motion.div
            key={index}
            className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.3,
              repeat: Infinity,
              repeatDelay: 2
            }}
          >
            <div
              className={`rounded-2xl px-3 py-1.5 max-w-[80%] ${
                index % 2 === 0
                  ? 'bg-white/10'
                  : 'bg-gradient-to-r from-[#6b2c84]/20 to-[#6b2c84]/10'
              }`}
            >
              <motion.div
                className="h-1.5 rounded-full bg-current"
                style={{ width: [30, 50, 70][index] }}
              />
            </div>
          </motion.div>
        ))}

        {/* Typing Indicator */}
        <motion.div
          className="flex gap-1 mt-auto ml-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="w-1.5 h-1.5 rounded-full bg-[#6b2c84]/30"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ChatbotAnimation;