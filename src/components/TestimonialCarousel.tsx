import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType, EmblaEventType } from "embla-carousel";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, Hand } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import "./testimonial-carousel.css";

type Item = { image: string; alt: string };

const AUTOPLAY_MS = 5000;
const RESUME_AFTER_MS = 8000;

const TestimonialCarousel = ({ items }: { items: Item[] }) => {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "center", direction: "rtl", skipSnaps: false, duration: 42 });
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);
  const [touched, setTouched] = useState(false);
  const [open, setOpen] = useState<number | null>(null);
  const resumeTimer = useRef<number>();
  const reduceMotion = useRef(
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  const onSelect = useCallback(() => embla && setSelected(embla.selectedScrollSnap()), [embla]);

  // Any manual interaction pauses autoplay for a while, then it resumes.
  const interact = useCallback(() => {
    setTouched(true);
    setPaused(true);
    window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => setPaused(false), RESUME_AFTER_MS);
  }, []);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect).on("reInit", onSelect).on("pointerDown", interact);
    return () => {
      embla.off("select", onSelect).off("reInit", onSelect).off("pointerDown", interact);
    };
  }, [embla, onSelect, interact]);

  // Autoplay — stops while paused, while the lightbox is open, and when the tab is hidden.
  useEffect(() => {
    if (!embla || paused || open !== null || reduceMotion.current) return;
    const t = window.setInterval(() => {
      if (!document.hidden) embla.scrollNext();
    }, AUTOPLAY_MS);
    return () => window.clearInterval(t);
  }, [embla, paused, open, selected]);

  useEffect(() => () => window.clearTimeout(resumeTimer.current), []);

  // 3D coverflow: every frame of the scroll, place each card by how far it is from the centre.
  // Transforms are written straight onto the card elements (no React re-render per frame).
  const cards = useRef<HTMLElement[]>([]);
  const tween = useCallback((api: EmblaCarouselType, event?: EmblaEventType) => {
    const engine = api.internalEngine();
    const progress = api.scrollProgress();
    const snaps = api.scrollSnapList();
    const inView = api.slidesInView();
    const count = snaps.length;
    snaps.forEach((snap, snapIndex) => {
      engine.slideRegistry[snapIndex].forEach((slideIndex) => {
        if (event === "scroll" && !inView.includes(slideIndex)) return;
        let diff = snap - progress;
        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((lp) => {
            const target = lp.target();
            if (slideIndex === lp.index && target !== 0) {
              diff = Math.sign(target) === -1 ? snap - (1 + progress) : snap + (1 - progress);
            }
          });
        }
        const off = Math.max(-2.2, Math.min(2.2, diff * count)); // slides away from centre
        const abs = Math.abs(off);
        const el = cards.current[slideIndex];
        if (!el) return;
        if (reduceMotion.current) {
          el.style.opacity = String(Math.max(0.45, 1 - abs * 0.5));
          return;
        }
        el.style.transform =
          `perspective(1100px) translateX(${off * 14}%) translateZ(${-abs * 140}px) rotateY(${off * -38}deg)`;
        el.style.opacity = String(Math.max(0.25, 1 - abs * 0.38));
        el.parentElement!.style.zIndex = String(100 - Math.round(abs * 10));
      });
    });
  }, []);

  useEffect(() => {
    if (!embla) return;
    tween(embla);
    embla.on("reInit", tween).on("scroll", tween).on("slideFocus", tween);
    return () => {
      embla.off("reInit", tween).off("scroll", tween).off("slideFocus", tween);
    };
  }, [embla, tween]);

  const go = (dir: 1 | -1) => {
    interact();
    if (dir === 1) embla?.scrollNext();
    else embla?.scrollPrev();
  };

  const onSlideClick = (i: number) => {
    if (!embla) return; // Embla v8 already swallows clicks that end a drag
    if (i === selected) setOpen(i);
    else {
      interact();
      embla.scrollTo(i);
    }
  };

  const onKey = (e: React.KeyboardEvent) => {
    // RTL: the left arrow moves forward
    if (e.key === "ArrowLeft") go(1);
    if (e.key === "ArrowRight") go(-1);
  };

  return (
    <div
      className="tc relative max-w-5xl mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => !touched && setPaused(false)}
    >
      <motion.div
        className="tc-stage"
        initial={{ opacity: 0, rotateY: -28, scale: 0.9 }}
        whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 1.1, ease: [0.23, 1, 0.32, 1] }}
        style={{ transformPerspective: 1400 }}
      >
      <div
        className="tc-viewport overflow-hidden py-8 outline-none"
        ref={emblaRef}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="המלצות מטופלים"
        onKeyDown={onKey}
      >
        <div className="tc-track flex touch-pan-y">
          {items.map((t, i) => (
            <div
              key={i}
              className="tc-slide min-w-0 shrink-0 grow-0 basis-[68%] sm:basis-[46%] md:basis-[30%] px-1 md:px-2 relative"
              data-active={i === selected}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} מתוך ${items.length}`}
            >
              <button
                type="button"
                ref={(el) => { if (el) cards.current[i] = el; }}
                onClick={() => onSlideClick(i)}
                className="tc-card group relative block w-full rounded-3xl overflow-hidden bg-white border border-purple-100 shadow-lg"
                aria-label={i === selected ? `הגדלת ההמלצה: ${t.alt}` : `מעבר להמלצה ${i + 1}`}
              >
                <img
                  src={t.image}
                  alt={t.alt}
                  draggable={false}
                  className="w-full aspect-[3/4] object-contain bg-white select-none"
                  loading={i < 3 ? "eager" : "lazy"}
                />
                <span className="tc-zoom absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-white/95 text-primary text-xs font-display font-bold px-3 py-1.5 shadow-md">
                  <Expand className="h-3.5 w-3.5" />
                  להגדלה
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
      </motion.div>

      {/* Arrows (RTL: right = previous, left = next) */}
      <button
        onClick={() => go(-1)}
        className="tc-arrow absolute top-1/2 -translate-y-1/2 right-0 md:-right-6 z-10 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-purple-100 flex items-center justify-center text-primary"
        aria-label="ההמלצה הקודמת"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      <button
        onClick={() => go(1)}
        className="tc-arrow absolute top-1/2 -translate-y-1/2 left-0 md:-left-6 z-10 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-purple-100 flex items-center justify-center text-primary"
        aria-label="ההמלצה הבאה"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Progress dots + counter */}
      <div className="flex flex-col items-center gap-3 mt-4">
        <div className="flex items-center gap-2" dir="rtl">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                interact();
                embla?.scrollTo(i);
              }}
              className="tc-dot relative h-2.5 rounded-full bg-purple-100 overflow-hidden"
              data-active={i === selected}
              aria-label={`המלצה ${i + 1}`}
              aria-current={i === selected}
            >
              {i === selected && (
                <span
                  key={`${selected}-${paused}`}
                  className="tc-fill absolute inset-0 bg-primary rounded-full"
                  style={{
                    animationDuration: `${AUTOPLAY_MS}ms`,
                    animationPlayState: paused || open !== null ? "paused" : "running",
                  }}
                />
              )}
            </button>
          ))}
        </div>
        <p dir="ltr" className="font-display text-sm font-semibold text-muted-foreground tabular-nums" aria-live="polite">
          {selected + 1} / {items.length}
        </p>
        <p className={`tc-hint md:hidden flex items-center gap-1.5 text-xs text-primary/70 font-body ${touched ? "is-gone" : ""}`}>
          <Hand className="h-3.5 w-3.5" />
          החליקו לעוד המלצות
        </p>
      </div>

      {/* Lightbox */}
      <Dialog open={open !== null} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-[min(92vw,560px)] p-2 sm:p-3 rounded-3xl bg-white">
          <DialogTitle className="sr-only">המלצת מטופל</DialogTitle>
          {open !== null && (
            <img src={items[open].image} alt={items[open].alt} className="w-full max-h-[82vh] object-contain rounded-2xl" />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TestimonialCarousel;
