import { useEffect, useRef, useState } from "react";
import { useLang } from "../context/language";
import { skillBars } from "../data/skills";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

function SkillBar({ skill, active }) {
  return (
    <div className="skill-bar">
      <div className="skill-bar-head">
        <div className="skill-id">
          <span className="skill-logo">
            <img
              src={skill.img}
              alt=""
              draggable="false"
              className={skill.invertOnLight ? "invert-on-light" : undefined}
            />
          </span>
          <h4>{skill.name}</h4>
        </div>
        <span className="skill-level">{skill.level}%</span>
      </div>
      <div className="track">
        <span
          className="fill"
          style={{ width: active ? `${skill.level}%` : 0 }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { t } = useLang();
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="skills" className="section skills" ref={ref}>
      <div className="container">
        <SectionHead title={t.skills.title} subtitle={t.skills.subtitle} />

        <div className="skills-grid">
          <Reveal className="skills-col">
            {skillBars.left.map((s) => (
              <SkillBar key={s.name} skill={s} active={active} />
            ))}
          </Reveal>

          <Reveal className="skills-col" delay={100}>
            {skillBars.right.map((s) => (
              <SkillBar key={s.name} skill={s} active={active} />
            ))}
          </Reveal>
        </div>

        {expanded && (
          <div className="skills-grid skills-extra">
            <div className="skills-col">
              {skillBars.extraLeft.map((s) => (
                <SkillBar key={s.name} skill={s} active={active} />
              ))}
            </div>
            <div className="skills-col">
              {skillBars.extraRight.map((s) => (
                <SkillBar key={s.name} skill={s} active={active} />
              ))}
            </div>
          </div>
        )}

        <div className="skills-more">
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
          >
            {expanded ? t.skills.showLess : t.skills.showMore}
            <i
              className={
                expanded ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"
              }
            ></i>
          </button>
        </div>
      </div>
    </section>
  );
}
