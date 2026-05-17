"use client";

import { useState, useEffect } from "react";

export function useActiveSection(sectionIds: string[], offset = 120): string {
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      for (const id of [...sectionIds].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - offset) {
          setActive(id);
          return;
        }
      }
      setActive(sectionIds[0]);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return active;
}
