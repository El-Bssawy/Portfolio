import { useLang } from "../context/language";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

export default function Timeline() {
  const { t } = useLang();

  return (
    <section id="timeline" className="section timeline">
      <div className="container">
        <SectionHead title={t.timeline.title} subtitle={t.timeline.subtitle} />

        <div className="timeline-track">
          {t.timeline.items.map((item, i) => (
            <Reveal
              key={item.title}
              className={`tl-item ${i % 2 === 0 ? "left" : "right"} ${item.color}`}
            >
              <span className="tl-node">
                <i className={item.icon}></i>
              </span>
              <div className="tl-card">
                <span className="tl-year">{item.year}</span>
                <h3>{item.title}</h3>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
