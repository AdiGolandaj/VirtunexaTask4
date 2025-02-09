import React, { useState, useEffect } from "react";

const Typewriter = ({ text = "", speed = 100, delay = 500 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    if (!text || typeof text !== "string") {
      setTypingComplete(true); // Handle invalid or empty text
      return;
    }

    let index = 0;

    const startTyping = () => {
      const typeInterval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1)); // Slice the string up to the current index
          index++;
        } else {
          clearInterval(typeInterval); // Stop the interval
          setTypingComplete(true); // Mark as complete
        }
      }, speed);
    };

    const delayTimeout = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(delayTimeout); // Cleanup timeout on unmount
    };
  }, [text, speed, delay]);

  return (
    <span>
      {displayedText}
      {!typingComplete && <span className="animate-blink">|</span>}
    </span>
  );
};

export default Typewriter;

// Usage
// <Typewriter text="International School of Business & Media" speed={100} delay={500} />
