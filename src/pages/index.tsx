import React, { useLayoutEffect, useRef, useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import Orb from "../components/Orb";
import ShinyText from "../components/ShinyText";
import CardNav from "../components/CardNav";
import MagicBento from "../components/MagicBento";
import SmoothScrolling from "../components/SmoothScrolling";
import FlowingMenu from "../components/FlowingMenu";
import CardSwap, { Card } from "../components/CardSwap";
import PixelCard from "../components/PixelCard";
import ScrollReveal from "../components/ScrollReveal";
import ContactBento from "../components/ContactBento";
import MarqueeLabel from "../components/MarqueeLabel";
import Footer from "../components/Footer";

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

const IndexPage: React.FC<PageProps> = () => {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
              The future is built on small connections. Let’s make one.
            </h1>
            <ContactBento></ContactBento>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </SmoothScrolling>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
