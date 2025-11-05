// Jika di file terpisah (./components/PCounter.tsx)
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const PCounter: React.FC = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!countRef.current || hasAnimated.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          gsap.to(
            { value: 0 },
            {
              value: 50,
              duration: 2,
              ease: "power2.out",
              onUpdate: function () {
                setCount(Math.floor(this.targets()[0].value));
              },
            },
          );
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(countRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={countRef}
      className="text-[5rem] md:text-[7rem] lg:text-[9rem] font-bold leading-none tracking-tighter -mt-2 md:-mt-4"
    >
      {count}+
    </span>
  );
};

export default PCounter;
