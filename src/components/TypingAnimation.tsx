import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    if (isTyping) {
      // Digitando a palavra
      if (currentText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }, 100); // Velocidade de digitação
        return () => clearTimeout(timeout);
      } else {
        // Palavra completa, aguardar antes de apagar
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000); // Tempo que a palavra fica completa
        return () => clearTimeout(timeout);
      }
    } else {
      // Apagando a palavra
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50); // Velocidade de apagar (mais rápido)
        return () => clearTimeout(timeout);
      } else {
        // Palavra apagada, ir para próxima
        const timeout = setTimeout(() => {
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setIsTyping(true);
        }, 300); // Pausa antes da próxima palavra
        return () => clearTimeout(timeout);
      }
    }
  }, [currentText, currentWordIndex, isTyping, words]);

  // Animação do cursor piscando
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="relative min-h-[1.5em] flex items-center justify-center">
      <span className="font-syncopate text-[#6b2c84] tracking-wider">
        {currentText}
        <motion.span
          animate={{ opacity: showCursor ? 1 : 0 }}
          transition={{ duration: 0.1 }}
          className="text-[#ec6429]"
        >
          |
        </motion.span>
      </span>
    </div>
  );
};

export default TypingAnimation;