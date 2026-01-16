"use client";

import { useRouter } from "next/navigation";

export const useScrollToSection = () => {
  const router = useRouter();

  const scrollToSection = (id) => {
    if (typeof window === "undefined") return;

    if (window.location.pathname === "/") {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      router.push(`/#${id}`);
    }
  };

  return { scrollToSection };
};
