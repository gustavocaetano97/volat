import React, { useEffect, useRef, useState } from "react";

const WORDS = [
  "NEGÓCIOS",
  "MARKETING",
  "VENDAS",
  "AUTOMAÇÃO",
  "TRÁFEGO PAGO",
  "DADOS",
  "IA",
  "POSICIONAMENTO",
];

const TYPING_SPEED = 80; // ms per letter
const ERASING_SPEED = 30; // ms per letter
const PAUSE_DURATION = 2000; // ms after word is fully typed

const TypingAnimation: React.FC = () => {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const currentWord = WORDS[wordIndex];

    if (isTyping) {
      if (displayed.length < currentWord.length) {
        timeoutRef.current = window.setTimeout(() => {
          setDisplayed(currentWord.slice(0, displayed.length + 1));
        }, TYPING_SPEED);
      } else {
        timeoutRef.current = window.setTimeout(() => {
          setIsTyping(false);
        }, PAUSE_DURATION);
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = window.setTimeout(() => {
          setDisplayed(currentWord.slice(0, displayed.length - 1));
        }, ERASING_SPEED);
      } else {
        setIsTyping(true);
        setWordIndex((prev) => (prev + 1) % WORDS.length);
      }
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayed, isTyping, wordIndex]);

  return (
    <h1
      style={{
        color: "white",
        fontSize: "clamp(1.5rem, 5vw, 3rem)",
        fontWeight: 700,
        letterSpacing: "0.04em",
        whiteSpace: "pre",
        display: "flex",
        alignItems: "center",
        minHeight: "1.2em",
      }}
    >
      {displayed}
      <span
        id="blinking-cursor"
        className="animate-pulse"
        style={{
          display: "inline-block",
          width: "0.7ch",
          marginLeft: "2px",
          background: "#a855f7",
          height: "1em",
          verticalAlign: "bottom",
          borderRadius: "2px",
        }}
      ></span>
    </h1>
  );
};

export default TypingAnimation;
