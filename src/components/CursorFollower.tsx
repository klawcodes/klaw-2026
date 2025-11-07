import React, { useEffect, useState, useRef } from "react";

interface CursorFollowerProps {
  text?: string;
  sectionId: string;
}

const CursorFollower: React.FC<CursorFollowerProps> = ({
  text = "scroll to explore",
  sectionId,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isInSection, setIsInSection] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if cursor is within the section
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        const inSection =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom;

        setIsInSection(inSection);

        // Delay visibility for smooth appearance
        if (inSection && !isVisible) {
          setTimeout(() => setIsVisible(true), 100);
        } else if (!inSection && isVisible) {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [sectionId, isVisible]);

  return (
    <div
      ref={cursorRef}
      className={`fixed pointer-events-none z-[5] transition-opacity duration-300 ${
        isInSection && isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -200%)",
      }}
    >
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 blur-xl bg-white/20 rounded-full scale-150" />

        {/* Text container */}
        <div className="relative bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
          <span className="text-white text-sm font-medium whitespace-nowrap tracking-wide">
            {text}
          </span>
        </div>

        {/* Arrow indicator */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-full">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="animate-bounce"
          >
            <path
              d="M6 2L6 10M6 10L3 7M6 10L9 7"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.6"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

// Export as default for Gatsby lazy loading
export default CursorFollower;
