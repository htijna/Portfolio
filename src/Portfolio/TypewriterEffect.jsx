import React, { useEffect, useState } from 'react';

const TypewriterEffect = ({ text1, text2 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isBackspacing, setIsBackspacing] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  const [currentText, setCurrentText] = useState(text1);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTyping) {
        if (index < currentText.length) {
          setDisplayedText((prev) => prev + currentText.charAt(index));
          setIndex((prev) => prev + 1);
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setIsBackspacing(true);
          }, 1000); // Wait before starting to backspace
        }
      } else if (isBackspacing) {
        if (index > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
          setIndex((prev) => prev - 1);
        } else {
          setIsBackspacing(false);
          setCurrentText(currentText === text1 ? text2 : text1); // Toggle between the two texts
          setTimeout(() => {
            setIsTyping(true);
          }, 500); // Wait before typing again
        }
      }
    }, 150); // Adjust typing speed

    return () => clearInterval(interval);
  }, [index, isTyping, isBackspacing, currentText, text1, text2]);

  return (
    <div style={{ display: 'inline-block', minWidth: '100px' }}>
      <span>{displayedText}</span>
    </div>
  );
};

export default TypewriterEffect;
