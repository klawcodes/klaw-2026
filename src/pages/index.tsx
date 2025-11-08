import React, { useLayoutEffect, useRef, useState } from "react";
import type { HeadFC, PageProps } from "gatsby";

// Lazy load components that use browser APIs
const Orb = React.lazy(() => import("../components/Orb"));
const ShinyText = React.lazy(() => import("../components/ShinyText"));
const CardNav = React.lazy(() => import("../components/CardNav"));
const MagicBento = React.lazy(() => import("../components/MagicBento"));
const SmoothScrolling = React.lazy(
  () => import("../components/SmoothScrolling"),
);
const FlowingMenu = React.lazy(() => import("../components/FlowingMenu"));
const CardSwap = React.lazy(() => import("../components/CardSwap"));
const PixelCard = React.lazy(() => import("../components/PixelCard"));
const ScrollReveal = React.lazy(() => import("../components/ScrollReveal"));
const ContactBento = React.lazy(() => import("../components/ContactBento"));
const MarqueeLabel = React.lazy(() => import("../components/MarqueeLabel"));
const Footer = React.lazy(() => import("../components/Footer"));
const CursorFollower = React.lazy(() => import("../components/CursorFollower"));

const IndexPage: React.FC<PageProps> = () => {
  const [scrollY, setScrollY] = React.useState(0);
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    // Set flag when component mounts on client
    setIsClient(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Show minimal content during SSR
  if (!isClient) {
    return <main className="min-h-screen bg-black text-white relative" />;
  }

  return (
    <React.Suspense fallback={<div className="min-h-screen bg-black" />}>
      <SmoothScrolling>
        <main className="min-h-screen bg-black text-white relative">
          <MarqueeLabel />

          {/* Background Orb with Parallax */}
          <div
            className="fixed top-0 left-0 w-full h-full z-0"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          >
            <Orb
              hoverIntensity={0.5}
              rotateOnHover={true}
              hue={0}
              forceHoverState={false}
            />
          </div>

          {/* Navigation */}
          <div className="relative z-50">
            <CardNav
              logoAlt="Company Logo"
              menuColor="#fff"
              buttonBgColor="#111"
              buttonTextColor="#fff"
              ease="power3.out"
            />
          </div>

          {/* Cursor Follower - hanya aktif di hero section */}
          <React.Suspense fallback={null}>
            <CursorFollower text="scroll to explore" sectionId="hero-section" />
          </React.Suspense>

          {/* Hero Section - Full Screen */}
          <section
            className="relative z-10 h-screen flex items-center justify-center px-4"
            id="hero-section"
          >
            <div className="w-[50%] max-w-7xl mx-auto">
              <h1 className="shiny-text animate-shine text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold px-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                I want to see my future and God has already given me twice.
              </h1>
            </div>
          </section>

          {/* Magic Bento Section - Full Width Below Hero */}
          <section className="relative z-10 min-h-screen flex items-center justify-center py-20 px-4 bg-slate-950">
            <div className="w-full max-w-7xl mx-auto flex justify-center">
              <MagicBento
                textAutoHide={true}
                enableStars={true}
                enableSpotlight={true}
                enableBorderGlow={true}
                enableTilt={false}
                enableMagnetism={false}
                clickEffect={true}
                spotlightRadius={300}
                particleCount={12}
                glowColor="132, 0, 255"
              />
            </div>
          </section>

          <style jsx>{`
            .shiny-text {
              background: linear-gradient(
                90deg,
                #666 0%,
                #666 40%,
                #fff 50%,
                #666 60%,
                #666 100%
              );
              background-size: 200% auto;
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              animation: shine 3s linear infinite;
            }

            @keyframes shine {
              to {
                background-position: 200% center;
              }
            }
          `}</style>

          <div className="relative z-10 h-[70%] flex items-center justify-center py-20 px-4 sm:px-8 bg-slate-950">
            <PixelCard />
          </div>

          <section className="relative z-10 flex items-center justify-center px-4 py-20">
            <div className="w-[50%] max-w-7xl mx-auto">
              <h1 className="shiny-text animate-shine text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold px-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                The future is built on small connections. Let's make one.
              </h1>
              <ContactBento />
            </div>
          </section>

          <Footer />
        </main>
      </SmoothScrolling>
    </React.Suspense>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Sumpah Mati - The Future</title>;
