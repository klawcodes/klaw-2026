// src/components/LoadingScreen.tsx
import React from "react";
import SumpahMatiLogo from "../images/SUMPAH MATI LOGO-01.svg"; // sesuaikan path

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
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

export default LoadingScreen;
