import React, { useLayoutEffect, useRef, useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import SumpahMatiLogo from "../images/SUMPAH MATI LOGO-01.svg";

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

interface NavLink {
  label: string;
  href: string;
  ariaLabel?: string;
}

interface NavItem {
  label: string;
  bgColor: string;
  textColor: string;
  links?: NavLink[];
}

interface CardNavProps {
  logo?: string;
  logoAlt?: string;
  items?: NavItem[];
  className?: string;
  ease?: string;
  baseColor?: string;
  menuColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
}

interface MenuItemProps {
  link: string;
  text: string;
  image: string;
}

interface FlowingMenuProps {
  items: MenuItemProps[];
}

const items = [
  {
    label: "About",
    bgColor: "#0D0716",
    textColor: "#fff",
    links: [
      { label: "Company", ariaLabel: "About Company" },
      { label: "Careers", ariaLabel: "About Careers" },
    ],
  },
  {
    label: "Projects",
    bgColor: "#170D27",
    textColor: "#fff",
    links: [
      { label: "Featured", ariaLabel: "Featured Projects" },
      { label: "Case Studies", ariaLabel: "Project Case Studies" },
    ],
  },
  {
    label: "Contact",
    bgColor: "#271E37",
    textColor: "#fff",
    links: [
      { label: "Email", ariaLabel: "Email us" },
      { label: "Twitter", ariaLabel: "Twitter" },
      { label: "LinkedIn", ariaLabel: "LinkedIn" },
    ],
  },
];

const demoItems = [
  {
    link: "#",
    text: "Republik Rempah",
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    link: "#",
    text: "DonasiKita",
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    link: "#",
    text: "Awas Imsak!",
    image: "https://picsum.photos/600/400?random=3",
  },
  {
    link: "#",
    text: "Capres Facts",
    image: "https://picsum.photos/600/400?random=4",
  },
];

// Loading Screen Component
const LoadingScreen: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-700 ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center">
        <img
          src={SumpahMatiLogo}
          alt="Sumpah Mati Logo"
          className="w-64 h-64 md:w-48 md:h-48 -m-1 animate-pulse"
        />
      </div>
    </div>
  );
};

const IndexPage: React.FC<PageProps> = () => {
  const [scrollY, setScrollY] = React.useState(0);
  const [isClient, setIsClient] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Set flag when component mounts on client
    setIsClient(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Simulate loading completion after all resources are loaded
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Minimum loading time untuk UX yang lebih baik

    // Wait for all images and resources to load
    window.addEventListener("load", () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // Show loading state during SSR
  if (!isClient) {
    return (
      <main className="min-h-screen bg-black text-white relative">
        <LoadingScreen isLoading={true} />
      </main>
    );
  }

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <React.Suspense fallback={<LoadingScreen isLoading={true} />}>
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
                items={items}
                menuColor="#fff"
                buttonBgColor="#111"
                buttonTextColor="#fff"
                ease="power3.out"
              />
            </div>

            {/* Hero Section - Full Screen */}
            <section className="relative z-10 h-screen flex items-center justify-center px-4">
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
            <div className="relative z-10 h-[70%] flex items-center justify-center py-20 px-4 bg-slate-950">
              <PixelCard></PixelCard>
            </div>

            <section className="relative z-10 flex items-center justify-center px-4 py-20">
              <div className="w-[50%] max-w-7xl mx-auto">
                <h1 className="shiny-text animate-shine text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold px-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                  The future is built on small connections. Let's make one.
                </h1>
                <ContactBento></ContactBento>
              </div>
            </section>
            <Footer></Footer>
          </main>
        </SmoothScrolling>
      </React.Suspense>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
