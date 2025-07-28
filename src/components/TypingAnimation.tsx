import React, { useEffect, useRef, useState } from "react";
import * as anime from "animejs";

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
const ERASING_SPEED = 35; // ms per letter
const PAUSE_DURATION = 2000; // ms after word is fully typed

const TypingAnimation: React.FC = () => {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const timeoutRef = useRef<number | null>(null);

  // Blinking cursor animation
  useEffect(() => {
    const cursor = document.getElementById("blinking-cursor");
    if (cursor) {
      anime({
        targets: cursor,
        opacity: [
          { value: 1, duration: 400 },
          { value: 0, duration: 400 },
        ],
        easing: "linear",
        loop: true,
        direction: "alternate",
      });
    }
  }, []);

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
        fontSize: "clamp(2rem, 6vw, 4rem)",
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
        style={{
          display: "inline-block",
          width: "0.7ch",
          marginLeft: "2px",
          background: "white",
          height: "1em",
          verticalAlign: "bottom",
          borderRadius: "2px",
        }}
      ></span>
    </h1>
  );
};

export default TypingAnimation;