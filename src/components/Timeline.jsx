import { useCallback, useEffect, useRef, useState } from "react";
import { useLang } from "../context/language";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

export default function Timeline() {
  const { t } = useLang();
  const items = t.timeline.items;
  const isRtl = t.dir === "rtl";
  const scrollRef = useRef(null);
  const rafRef = useRef(0);
  const dragRef = useRef({ active: false, startX: 0, startScroll: 0, moved: false });
  const hintRef = useRef(false);
  const [active, setActive] = useState(0);
  const [position, setPosition] = useState(0);
  const [hintHidden, setHintHidden] = useState(false);

  const update = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const max = el.scrollWidth - el.clientWidth;
    const ratio = max > 0 ? Math.min(1, Math.max(0, Math.abs(el.scrollLeft) / max)) : 0;
    const pos = ratio * (items.length - 1);

    setPosition(pos);
    setActive((prev) => {
      const next = Math.round(pos);
      return prev === next ? prev : next;
    });

    if (ratio > 0.015 && !hintRef.current) {
      hintRef.current = true;
      setHintHidden(true);
    }
  }, [items.length]);

  const requestUpdate = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(update);
  }, [update]);

  useEffect(() => {
    update();

    const handleResize = () => requestUpdate();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(rafRef.current);
    };
  }, [requestUpdate, update]);

  useEffect(() => {
    // Re-centre the first chapter when the reading direction flips.
    const el = scrollRef.current;
    if (!el) return;

    el.scrollTo({ left: 0, behavior: "instant" });
    setPosition(0);
    setActive(0);
    hintRef.current = false;
    setHintHidden(false);
  }, [t.dir]);

  const goTo = (index) => {
    const el = scrollRef.current;
    if (!el) return;

    const next = Math.max(0, Math.min(items.length - 1, index));
    const target = el.querySelectorAll(".tl-chapter")[next];
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    setActive(next);
  };

  const handleKeyDown = (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;

    event.preventDefault();
    const forward = isRtl ? event.key === "ArrowLeft" : event.key === "ArrowRight";
    goTo(active + (forward ? 1 : -1));
  };

  const handlePointerDown = (event) => {
    if (event.pointerType !== "mouse" || event.button !== 0) return;

    const el = scrollRef.current;
    if (!el) return;

    dragRef.current = {
      active: true,
      startX: event.clientX,
      startScroll: el.scrollLeft,
      moved: false,
    };
    el.classList.add("is-dragging");
    el.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    const drag = dragRef.current;
    if (!drag.active) return;

    const el = scrollRef.current;
    if (!el) return;

    const delta = event.clientX - drag.startX;
    if (Math.abs(delta) > 6) drag.moved = true;
    el.scrollLeft = drag.startScroll - delta;
  };

  const handlePointerEnd = (event) => {
    const drag = dragRef.current;
    if (!drag.active) return;

    drag.active = false;
    const el = scrollRef.current;
    if (!el) return;

    el.classList.remove("is-dragging");
    if (el.hasPointerCapture?.(event.pointerId)) {
      el.releasePointerCapture(event.pointerId);
    }

    if (drag.moved) {
      const max = el.scrollWidth - el.clientWidth;
      const ratio = max > 0 ? Math.min(1, Math.abs(el.scrollLeft) / max) : 0;
      goTo(Math.round(ratio * (items.length - 1)));
    }
  };

  const handleSpotlight = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <section id="timeline" className="section timeline">
      <div className="container">
        <SectionHead title={t.timeline.title} subtitle={t.timeline.subtitle} />

        <Reveal className="timeline-stage">
          <span
            className={`timeline-watermark ${items[active].color} ${
              items[active].year.length > 6 ? "is-long" : ""
            }`}
            aria-hidden="true"
          >
            <span key={`${t.dir}-${active}`}>{items[active].year}</span>
          </span>

          <div
            className="timeline-scroll"
            ref={scrollRef}
            onScroll={requestUpdate}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerEnd}
            onPointerCancel={handlePointerEnd}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="region"
            aria-roledescription="carousel"
            aria-label={t.timeline.title}
          >
            <div className="timeline-inner">
              <div className="timeline-chapters">
                <div className="timeline-rail" aria-hidden="true">
                  <span
                    className="timeline-rail-fill"
                    style={{ width: `${(position / Math.max(1, items.length - 1)) * 100}%` }}
                  />
                </div>

                {items.map((item, i) => {
                  const offset = i - position;
                  const depth = Math.min(Math.abs(offset), 3);
                  const side = Math.sign(offset) * (isRtl ? -1 : 1);
                  const rotate = -side * depth * 13;

                  return (
                    <article
                      key={item.title}
                      className={`tl-chapter ${item.color} ${active === i ? "is-active" : ""}`}
                      aria-hidden={Math.abs(offset) > 1.35 ? "true" : undefined}
                      style={{
                        transform: `perspective(1500px) translate3d(${(-offset * 5).toFixed(1)}px, ${(depth * 13).toFixed(1)}px, ${(-depth * 130).toFixed(1)}px) rotateY(${rotate.toFixed(2)}deg) scale(${(1 - depth * 0.055).toFixed(3)})`,
                        opacity: 1 - depth * 0.23,
                        zIndex: 30 - Math.round(depth * 8),
                      }}
                    >
                      <span className="tl-glow" aria-hidden="true" />

                      <div className="tl-node-wrap">
                        <span className="tl-node" aria-hidden="true">
                          <i className={item.icon}></i>
                        </span>
                      </div>

                      <div className="tl-card" onPointerMove={handleSpotlight}>
                        <div className="tl-card-top">
                          <span className="tl-year">{item.year}</span>
                          <span className="tl-index" aria-hidden="true">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <h3>{item.title}</h3>

                        <ul>
                          {item.points.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="timeline-nav">
            <button
              type="button"
              className="tl-arrow tl-prev"
              onClick={() => goTo(active - 1)}
              disabled={active === 0}
              aria-label={t.timeline.prev}
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button
              type="button"
              className="tl-arrow tl-next"
              onClick={() => goTo(active + 1)}
              disabled={active === items.length - 1}
              aria-label={t.timeline.next}
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </Reveal>

        <div className={`timeline-footer ${hintHidden ? "is-settled" : ""}`}>
          <div className="timeline-meta">
            <span className="timeline-count" aria-live="polite">
              <strong>{String(active + 1).padStart(2, "0")}</strong>
              <span>/ {String(items.length).padStart(2, "0")}</span>
            </span>

            <span
              className={`timeline-active-year ${items[active].color}`}
              key={`${t.dir}-${active}`}
            >
              {items[active].year}
            </span>
          </div>

          <span className="timeline-hint" aria-hidden="true">
            <i className="fa-solid fa-arrows-left-right"></i>
            {t.timeline.hint}
          </span>

          <div className="timeline-steps">
            {items.map((item, i) => (
              <button
                key={item.title}
                type="button"
                className={`tl-step ${item.color} ${active === i ? "is-active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={item.year}
                aria-current={active === i ? "true" : undefined}
              >
                <span className="tl-step-num">{String(i + 1).padStart(2, "0")}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
