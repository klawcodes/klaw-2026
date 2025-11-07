// src/components/Layout.tsx
import React, { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";

interface LayoutProps {
  children: React.ReactNode;
  location?: {
    pathname: string;
  };
}

const Layout: React.FC<LayoutProps> = ({ children, location }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [prevPath, setPrevPath] = useState("");

  useEffect(() => {
    if (location && location.pathname !== prevPath) {
      setIsLoading(true);
      setPrevPath(location.pathname);

      // Simulasi loading (sesuaikan durasi dengan kebutuhan)
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 800); // 800ms loading time

      return () => clearTimeout(timer);
    }
  }, [location, prevPath]);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <div
        className={`transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
      >
        {children}
      </div>
    </>
  );
};

export default Layout;
