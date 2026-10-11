import { useState } from "react";
import { useLang } from "../context/language";
import { projects, projectFilters } from "../data/projects";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

export default function Projects() {
  const { t } = useLang();
  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const STEP = 6;

  const matches = projects.filter((p) => filter === "all" || p.type === filter);
  const visible = showAll ? matches : matches.slice(0, STEP);
  const hasMore = matches.length > STEP;

  const changeFilter = (f) => {
    setFilter(f);
    setShowAll(false);
  };

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionHead title={t.projects.title} subtitle={t.projects.subtitle} />

        <div className="filters">
          {projectFilters.map((f) => (
            <button
              type="button"
              key={f}
              className={filter === f ? "active" : ""}
              onClick={() => changeFilter(f)}
            >
              {t.projects.filters[f]}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visible.map((p, i) => (
            <Reveal className="project-card" key={p.id} delay={(i % 3) * 70}>
              <div className="project-media">
                <img src={p.src} alt={p.name} draggable="false" loading="lazy" />
                <div className="project-overlay">
                  <a
                    className="btn btn-primary"
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-up-right-from-square"></i>
                    {t.projects.visit}
                  </a>
                  <a
                    className="btn btn-ghost"
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-github"></i>
                    {t.projects.code}
                  </a>
                </div>
              </div>

              <div className="project-info">
                <h3>{p.name}</h3>
                <div className="project-tags">
                  {p.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {hasMore && (
          <div className="projects-more">
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => setShowAll((v) => !v)}
            >
              {showAll ? t.projects.showLess : t.projects.showMore}
              <i
                className={`fa-solid ${
                  showAll ? "fa-chevron-up" : "fa-chevron-down"
                }`}
              ></i>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
