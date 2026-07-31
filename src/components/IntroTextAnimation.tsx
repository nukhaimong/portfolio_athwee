'use client';

import { useEffect, useState } from 'react';

const IntroTextAnimation = () => {
  // Typewriter state - continuous looping
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopCount, setLoopCount] = useState(0);
  const fullText = "Hi, I'm Athwee";

  useEffect(() => {
    let index = isDeleting ? fullText.length : 0;
    let timer: NodeJS.Timeout;

    const typeEffect = () => {
      if (!isDeleting) {
        // Typing
        if (index <= fullText.length) {
          setDisplayText(fullText.slice(0, index));
          index++;
          timer = setTimeout(typeEffect, 80);
        } else {
          // Pause before deleting
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, 2000);
        }
      } else {
        // Deleting
        if (index >= 0) {
          setDisplayText(fullText.slice(0, index));
          index--;
          timer = setTimeout(typeEffect, 40);
        } else {
          // Pause before typing again
          setIsDeleting(false);
          setLoopCount(loopCount + 1);
          timer = setTimeout(typeEffect, 500);
        }
      }
    };

    timer = setTimeout(typeEffect, 300);

    return () => clearTimeout(timer);
  }, [isDeleting, loopCount, fullText]);
  return displayText;
};

export default IntroTextAnimation;
