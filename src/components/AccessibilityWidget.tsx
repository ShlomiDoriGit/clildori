import { useState, useEffect, useCallback } from "react";
import { X, ZoomIn, ZoomOut, Contrast, Type, Link2, RotateCcw, Eye, MousePointer2, AlignCenter, Minus } from "lucide-react";

interface AccessibilityState {
  fontSize: number;
  highContrast: boolean;
  invertColors: boolean;
  grayscale: boolean;
  highlightLinks: boolean;
  readableFont: boolean;
  bigCursor: boolean;
  lineHeight: boolean;
  letterSpacing: boolean;
  stopAnimations: boolean;
}

const defaultState: AccessibilityState = {
  fontSize: 0,
  highContrast: false,
  invertColors: false,
  grayscale: false,
  highlightLinks: false,
  readableFont: false,
  bigCursor: false,
  lineHeight: false,
  letterSpacing: false,
  stopAnimations: false,
};

/* Universal accessibility icon (wheelchair) as inline SVG */
const A11yIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="4" r="2" />
    <path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z" />
  </svg>
);

const AccessibilityWidget = () => {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<AccessibilityState>(() => {
    try {
      const saved = localStorage.getItem("a11y");
      return saved ? { ...defaultState, ...JSON.parse(saved) } : defaultState;
    } catch {
      return defaultState;
    }
  });

  const apply = useCallback((s: AccessibilityState) => {
    const root = document.documentElement;
    const body = document.body;

    root.style.fontSize = s.fontSize === 0 ? "" : `${100 + s.fontSize * 15}%`;
    body.classList.toggle("a11y-high-contrast", s.highContrast);
    body.classList.toggle("a11y-invert-colors", s.invertColors);
    body.classList.toggle("a11y-grayscale", s.grayscale);
    body.classList.toggle("a11y-highlight-links", s.highlightLinks);
    body.classList.toggle("a11y-readable-font", s.readableFont);
    body.classList.toggle("a11y-big-cursor", s.bigCursor);
    body.classList.toggle("a11y-line-height", s.lineHeight);
    body.classList.toggle("a11y-letter-spacing", s.letterSpacing);
    body.classList.toggle("a11y-stop-animations", s.stopAnimations);

    localStorage.setItem("a11y", JSON.stringify(s));
  }, []);

  useEffect(() => {
    apply(state);
  }, [state, apply]);

  const update = (partial: Partial<AccessibilityState>) => {
    setState((prev) => ({ ...prev, ...partial }));
  };

  const reset = () => {
    setState(defaultState);
  };

  const changeFontSize = (dir: number) => {
    setState((prev) => ({
      ...prev,
      fontSize: Math.max(-2, Math.min(4, prev.fontSize + dir)),
    }));
  };

  const isModified = JSON.stringify(state) !== JSON.stringify(defaultState);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* Floating accessibility button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="תפריט נגישות"
        title="נגישות"
        className="a11y-widget-btn fixed bottom-5 left-5 z-[9999] w-[52px] h-[52px] md:w-[58px] md:h-[58px] rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.25)] flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
        style={{ background: "linear-gradient(135deg, #1565C0, #1E88E5)" }}
      >
        <A11yIcon className="w-7 h-7 md:w-8 md:h-8 text-white" />
      </button>

      {/* Panel overlay */}
      {open && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/25 z-[9999] a11y-widget-backdrop"
          />

          {/* Widget panel */}
          <div
            role="dialog"
            aria-label="הגדרות נגישות"
            aria-modal="true"
            className="a11y-widget-panel fixed bottom-[85px] left-5 z-[10000] w-[310px] max-h-[75vh] overflow-hidden bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.2)] border border-gray-100 flex flex-col"
            style={{ direction: "rtl" }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-5 py-4 shrink-0"
              style={{ background: "linear-gradient(135deg, #1565C0, #1E88E5)" }}
            >
              <div className="flex items-center gap-2.5">
                <A11yIcon className="w-6 h-6 text-white" />
                <h2 className="font-bold text-[17px] text-white tracking-wide" style={{ fontFamily: "Assistant, sans-serif" }}>
                  תפריט נגישות
                </h2>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="סגור תפריט נגישות"
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="overflow-y-auto flex-1 p-4 space-y-2.5">
              {/* Font size control */}
              <div className="flex items-center justify-between bg-gray-50 rounded-xl px-3.5 py-3 border border-gray-100">
                <span className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Type className="w-4 h-4 text-blue-600" />
                  גודל טקסט
                </span>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => changeFontSize(-1)}
                    disabled={state.fontSize <= -2}
                    aria-label="הקטן טקסט"
                    className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center hover:bg-blue-50 hover:border-blue-200 disabled:opacity-30 transition-colors"
                  >
                    <ZoomOut className="w-3.5 h-3.5 text-gray-600" />
                  </button>
                  <span className="w-8 text-center text-xs font-bold text-blue-700">
                    {state.fontSize > 0 ? `+${state.fontSize}` : state.fontSize}
                  </span>
                  <button
                    onClick={() => changeFontSize(1)}
                    disabled={state.fontSize >= 4}
                    aria-label="הגדל טקסט"
                    className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center hover:bg-blue-50 hover:border-blue-200 disabled:opacity-30 transition-colors"
                  >
                    <ZoomIn className="w-3.5 h-3.5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Toggle options */}
              <ToggleOption
                icon={<Contrast className="w-4 h-4" />}
                label="ניגודיות גבוהה"
                active={state.highContrast}
                onClick={() => update({ highContrast: !state.highContrast })}
              />
              <ToggleOption
                icon={<Eye className="w-4 h-4" />}
                label="היפוך צבעים"
                active={state.invertColors}
                onClick={() => update({ invertColors: !state.invertColors })}
              />
              <ToggleOption
                icon={<Eye className="w-4 h-4" />}
                label="גווני אפור"
                active={state.grayscale}
                onClick={() => update({ grayscale: !state.grayscale })}
              />
              <ToggleOption
                icon={<Link2 className="w-4 h-4" />}
                label="הדגשת קישורים"
                active={state.highlightLinks}
                onClick={() => update({ highlightLinks: !state.highlightLinks })}
              />
              <ToggleOption
                icon={<Type className="w-4 h-4" />}
                label="גופן קריא"
                active={state.readableFont}
                onClick={() => update({ readableFont: !state.readableFont })}
              />
              <ToggleOption
                icon={<AlignCenter className="w-4 h-4" />}
                label="ריווח שורות"
                active={state.lineHeight}
                onClick={() => update({ lineHeight: !state.lineHeight })}
              />
              <ToggleOption
                icon={<Minus className="w-4 h-4" />}
                label="ריווח אותיות"
                active={state.letterSpacing}
                onClick={() => update({ letterSpacing: !state.letterSpacing })}
              />
              <ToggleOption
                icon={<MousePointer2 className="w-4 h-4" />}
                label="סמן מוגדל"
                active={state.bigCursor}
                onClick={() => update({ bigCursor: !state.bigCursor })}
              />
              <ToggleOption
                icon={<RotateCcw className="w-4 h-4" />}
                label="עצירת אנימציות"
                active={state.stopAnimations}
                onClick={() => update({ stopAnimations: !state.stopAnimations })}
              />

              {/* Reset */}
              {isModified && (
                <button
                  onClick={reset}
                  className="w-full mt-1 py-2.5 rounded-xl bg-red-50 text-red-600 text-sm font-semibold hover:bg-red-100 transition-colors flex items-center justify-center gap-2 border border-red-100"
                >
                  <RotateCcw className="w-4 h-4" />
                  איפוס הגדרות
                </button>
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-3 border-t border-gray-100 text-center shrink-0 bg-gray-50/50">
              <p className="text-[10px] text-gray-400 leading-relaxed">
                אתר זה מונגש בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות
                <br />
                (התאמות נגישות השירות) התשע״ג - 2013
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

const ToggleOption = ({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    aria-pressed={active}
    className={`w-full flex items-center justify-between rounded-xl px-3.5 py-3 transition-all border ${
      active
        ? "bg-blue-50 border-blue-200 shadow-sm"
        : "bg-gray-50 border-gray-100 hover:bg-gray-100 hover:border-gray-200"
    }`}
  >
    <span className="text-sm font-medium text-gray-700 flex items-center gap-2.5">
      <span className={active ? "text-blue-600" : "text-gray-400"}>{icon}</span>
      {label}
    </span>
    <span
      className={`w-10 h-[22px] rounded-full relative transition-colors ${active ? "bg-blue-600" : "bg-gray-300"}`}
    >
      <span
        className={`absolute top-[3px] w-4 h-4 rounded-full bg-white shadow-sm transition-all ${
          active ? "right-[3px]" : "right-[calc(100%-19px)]"
        }`}
      />
    </span>
  </button>
);

export default AccessibilityWidget;
