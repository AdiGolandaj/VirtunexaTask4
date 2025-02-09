import React, { useEffect, useState, useRef } from 'react';
import Typewriter from './Typewritter.jsx';

const AfterHero = () => {
  const [startTyping, setStartTyping] = useState(false);
  const afterHeroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            setStartTyping(true);
            observer.disconnect(); // Stop observing once the animation starts
          }
        });
      },
      {
        threshold: 0.6, // Trigger when 60% of the component is in view
      }
    );

    if (afterHeroRef.current) {
      observer.observe(afterHeroRef.current);
    }

    return () => {
      if (afterHeroRef.current) {
        observer.unobserve(afterHeroRef.current);
      }
    };
  }, []);

  return (
    <div ref={afterHeroRef} className="flex font-extrabold text-7xl pl-20 w-2/3 items-center h-90 bg-neutral-900  text-white">
      {startTyping && (
        <Typewriter
          text="Step into the future of online shopping. Try on accessories virtually!"
          speed={75}
          delay={500}
        />
      )}
    </div>
  );
};

export default AfterHero;