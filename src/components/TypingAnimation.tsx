import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypingAnimation = () => {
  const words = [
    'NEGÓCIOS',
    'MARKETING', 
    'VENDAS',
    'AUTOMAÇÃO',
    'TRÁFEGO PAGO',
    'DADOS',
    'IA',
    'POSICIONAMENTO'
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    if (isTyping) {
      // Digitando a palavra
      if (currentText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }, 150); // Velocidade de digitação
        return () => clearTimeout(timeout);
      } else {
        // Palavra completa, aguardar antes de apagar
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1500); // Tempo que a palavra fica completa
        return () => clearTimeout(timeout);
      }
    } else {
      // Apagando a palavra
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 80); // Velocidade de apagar (mais rápido)
        return () => clearTimeout(timeout);
      } else {
        // Palavra apagada, ir para próxima
        const timeout = setTimeout(() => {
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setIsTyping(true);
        }, 500); // Pausa antes da próxima palavra
        return () => clearTimeout(timeout);
      }
    }
  }, [currentText, currentWordIndex, isTyping, words]);

  return (
    <span className="inline-block min-w-[200px] text-left">
      <span className="font-syncopate tracking-wider text-white">
        {currentText}
      </span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ 
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="text-[#6b2c84] font-syncopate tracking-wider ml-1"
      >
        |
      </motion.span>
    </span>
  );
};

export default TypingAnimation;
        >
          |
        </motion.span>
      </span>
    </div>
  );
};

export default TypingAnimation;