import { useLang } from "../context/language";
import { techLogos } from "../data/skills";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

const CODE_LINES = [
  [{ t: "const " }, { t: "me", c: "c-var" }, { t: " = {" }],
  [{ t: "  name: " }, { t: '"Moaz"', c: "c-str" }, { t: "," }],
  [{ t: "  role: " }, { t: '"Web Developer"', c: "c-str" }, { t: "," }],
  [
    { t: "  stack: [" },
    { t: '"React"', c: "c-str" },
    { t: ", " },
    { t: '"TypeScript"', c: "c-str" },
    { t: ", " },
    { t: '"PHP"', c: "c-str" },
    { t: "]," },
  ],
  [{ t: "  experience: " }, { t: '"1.5 years"', c: "c-str" }, { t: "," }],
  [{ t: "  projects: " }, { t: "15", c: "c-bool" }, { t: "," }],
  [{ t: "  available: " }, { t: "true", c: "c-bool" }, { t: "," }],
  [{ t: "};" }],
];

export default function About() {
  const { t } = useLang();
  const a = t.about;

  return (
    <section id="about" className="section about">
      <div className="container">
        <SectionHead title={a.title} />

        <div className="about-grid">
          <Reveal className="about-intro">
            <h3>{a.heading}</h3>
            <p>{a.bio}</p>

            <div className="about-cta">
              <a
                className="btn btn-primary"
                href={`${import.meta.env.BASE_URL}Moaz_Hamada_Salem_Resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-file-arrow-down"></i>
                {a.cv}
              </a>
            </div>

            <div className="about-features">
              {a.features.map((f) => (
                <div className="feature" key={f.title}>
                  <span className="feature-icon">
                    <i className={f.icon}></i>
                  </span>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="about-side">
            <Reveal className="stats-grid" delay={80}>
              {a.stats.map((s) => (
                <div className="stat" key={s.label}>
                  <span className="stat-value gradient-text">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </Reveal>

            <Reveal className="code-card" delay={160}>
              <div className="code-bar">
                <span className="c-red" />
                <span className="c-yellow" />
                <span className="c-green" />
                <span className="code-name">developer.js</span>
              </div>
              <pre className="code-body">
                {CODE_LINES.map((line, i) => (
                  <div className="code-line" key={i}>
                    <span className="code-num">{i + 1}</span>
                    <span className="code-src">
                      {line.map((token, j) => (
                        <span key={j} className={token.c}>
                          {token.t}
                        </span>
                      ))}
                    </span>
                  </div>
                ))}
              </pre>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="marquee" aria-label={a.stackTitle}>
        <div className="marquee-track">
          {[...techLogos, ...techLogos].map((logo, i) => (
            <div className="marquee-item" key={`${logo.name}-${i}`}>
              <img src={logo.img} alt={logo.name} draggable="false" />
              <span>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
