import { useEffect, useState } from "react";
import { useLang } from "../context/language";

const SECTIONS = ["home", "about", "skills", "projects", "timeline", "contact"];

export default function ScrollDots() {
  const { t } = useLang();
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="scroll-dots" aria-label={t.nav.home}>
      {SECTIONS.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={`dot ${active === id ? "active" : ""}`}
          aria-label={t.nav[id]}
        >
          <span className="dot-tip">{t.nav[id]}</span>
        </a>
      ))}
    </nav>
  );
}
