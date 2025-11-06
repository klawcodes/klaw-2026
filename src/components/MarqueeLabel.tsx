import React from "react";

interface MarqueeProps {
  text?: string;
}

const MarqueeLabel: React.FC<MarqueeProps> = ({
  text = "website is under development ★",
}) => {
  // Duplikasi teks untuk memastikan tidak ada gap
  const repeatedText = Array(20).fill(text).join(" ");

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        <span className="marquee-text">{repeatedText}</span>
        <span className="marquee-text">{repeatedText}</span>
      </div>
      <style jsx>{`
        .marquee-container {
          width: 100%;
          overflow: hidden;
          background-color: #000;
          color: #fff;
          padding: 10px 0;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 9999;
        }

        .marquee-content {
          display: flex;
          width: fit-content;
          animation: marquee 60s linear infinite;
        }

        .marquee-text {
          white-space: nowrap;
          padding-right: 2rem;
          font-size: 14px;
          font-weight: 500;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .marquee-text {
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default MarqueeLabel;
