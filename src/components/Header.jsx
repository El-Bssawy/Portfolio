import { useEffect, useState } from "react";
import { useLang } from "../context/language";
import { ui } from "../data/content";

const logo = `${import.meta.env.BASE_URL}logo.png`;

const SECTIONS = ["home", "about", "skills", "projects", "timeline", "contact"];

export default function Header({ theme, toggleTheme }) {
  const { t, lang, toggleLang } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header className={scrolled ? "scrolled" : ""}>
      <div className="container header-inner">
        <a href="#home" className="logo" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Moaz El-Bssawy" draggable="false" />
          <span>
            {lang === "ar" ? (
              "معاذ"
            ) : (
              <>
                El<span className="accent">-</span>Bssawy
              </>
            )}
          </span>
        </a>

        <nav className={menuOpen ? "open" : ""}>
          <ul>
            {SECTIONS.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={active === id ? "active" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="pill-btn lang-btn"
            onClick={toggleLang}
            aria-label="Switch language"
          >
            {lang === "en" ? ui.langButton.ar : ui.langButton.en}
          </button>

          <button
            type="button"
            className="pill-btn icon-btn"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
          >
            <i className={theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
          </button>

          <button
            type="button"
            className="pill-btn icon-btn menu-btn"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
          </button>
        </div>
      </div>
    </header>
  );
}
