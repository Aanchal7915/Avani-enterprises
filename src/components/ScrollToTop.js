// src/components/ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}
