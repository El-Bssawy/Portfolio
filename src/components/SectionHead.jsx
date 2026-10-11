import Reveal from "./Reveal";

export default function SectionHead({ title, subtitle }) {
  return (
    <Reveal className="section-head">
      <span className="section-dot" />
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </Reveal>
  );
}
