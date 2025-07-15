import React from 'react';

const words = ['visão', 'conteúdo', 'vendas', 'alcance', 'icônico'];

const MovingWords = () => {
  return (
    <div className="overflow-hidden">
      <div className="moving-words">
        {[...words, ...words].map((word, index) => (
          <div
            key={index}
            className="text-xl md:text-2xl font-light text-[#6b2c84] whitespace-nowrap"
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovingWords;