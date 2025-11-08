import React, { useState, useEffect } from "react";
import SumpahMatiLogo from "../images/SUMPAH MATI LOGO-01.svg";

const GlobalLoadingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set client flag
    setIsClient(true);

    if (typeof window === "undefined") return;

    console.log("GlobalLoadingScreen mounted"); // Debug log

    // Hide loading after initial mount
    const initialTimer = setTimeout(() => {
      console.log("Hiding initial loading"); // Debug log
      setIsLoading(false);
    }, 1500);

    // Wait for all images and resources to load
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    window.addEventListener("load", handleLoad);

    // Handle Gatsby route changes
    const handleRouteChange = () => {
      console.log("Route change detected"); // Debug log
      setIsLoading(true);

      // Hide after a delay
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    };

    // Listen for custom Gatsby route change event
    window.addEventListener("gatsby-route-change", handleRouteChange);

    // Also listen for Gatsby Link clicks
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");

      if (link && link.getAttribute("href")?.startsWith("/")) {
        const currentPath = window.location.pathname;
        const targetPath = link.getAttribute("href");

        // Only show loading if navigating to different page
        if (currentPath !== targetPath && !link.getAttribute("target")) {
          console.log("Link click detected, showing loading"); // Debug log
          setIsLoading(true);
        }
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      clearTimeout(initialTimer);
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("gatsby-route-change", handleRouteChange);
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  // Don't render during SSR
  if (!isClient) {
    return null;
  }

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

export default GlobalLoadingScreen;
