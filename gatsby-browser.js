import React from "react";
import GlobalLoadingScreen from "./src/components/GlobalLoadingScreen";

// Import global CSS (yang sudah ada sebelumnya)
import "./src/styles/global.css";

// Wrap all pages with GlobalLoadingScreen
export const wrapPageElement = ({ element }) => {
  return (
    <>
      <GlobalLoadingScreen />
      {element}
    </>
  );
};

// Add route change event handling
export const onRouteUpdate = ({ location, prevLocation }) => {
  console.log(
    "Route updated from",
    prevLocation?.pathname,
    "to",
    location.pathname,
  );

  // Trigger custom event for route changes
  if (typeof window !== "undefined" && prevLocation) {
    window.dispatchEvent(new CustomEvent("gatsby-route-change"));
  }
};
