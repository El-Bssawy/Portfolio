import { useEffect, useState } from "react";
import { useLang } from "../context/language";
import { links } from "../data/content";
import ParticleBackground from "./ParticleBackground";
import photo from "../assets/me.jpg";
import { techLogos } from "../data/skills";

function useTypewriter(words) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return undefined;

    const word = words[index % words.length];
    let timeout;

    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && text === "") {
      timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      }, 260);
    } else {
      timeout = setTimeout(
        () =>
          setText((prev) =>
            deleting ? word.slice(0, prev.length - 1) : word.slice(0, prev.length + 1),
          ),
        deleting ? 45 : 85,
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return text;
}

export default function Hero() {
  const { t } = useLang();
  const role = useTypewriter(t.hero.roles);
  const chips = techLogos.slice(0, 4);

  return (
    <section id="home" className="hero">
      <ParticleBackground />

      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="hero-badge">
            <span className="dot" />
            {t.hero.badge}
          </span>

          <h1>
            <span className="hero-kicker">
              {t.hero.greeting} <span className="hero-firstname">{t.hero.firstName}</span>
            </span>
            <span className="hero-name gradient-text">{t.hero.name}</span>
          </h1>

          <h2 className="hero-role">
            <span className="prompt">&lt;/&gt;</span>
            <span className="typed">{role}</span>
            <span className="caret" />
          </h2>

          <span className="hero-exp">
            <i className="fa-solid fa-briefcase"></i>
            {t.hero.experience}
          </span>

          <p className="hero-tagline">{t.hero.tagline}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              {t.hero.ctaPrimary}
              <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="#contact" className="btn btn-ghost">
              {t.hero.ctaSecondary}
            </a>
          </div>

          <div className="hero-social">
            {links.social.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                title={s.name}
              >
                <i className={s.icon}></i>
              </a>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="glow-ring" />
          <div className="portrait">
            <img src={photo} alt="Moaz El-Bssawy" draggable="false" />
          </div>

          <div className="float-chip chip-1">
            <img src={chips[0].img} alt="" draggable="false" /> {chips[0].name}
          </div>
          <div className="float-chip chip-2">
            <img src={chips[1].img} alt="" draggable="false" /> {chips[1].name}
          </div>
          <div className="float-chip chip-3">
            <img src={chips[2].img} alt="" draggable="false" /> {chips[2].name}
          </div>
        </div>
      </div>
    </section>
  );
}
