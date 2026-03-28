import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, CalendarDays } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";

const navItems = [
  { label: "התהליך בקליניקה", target: "program" },
  { label: "מוצרים", target: "products" },
  { label: "מי אני", target: "about" },
];

const LogoBanner = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = useCallback((id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 120);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-[72px] md:h-20">
        {/* Right side: Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <img
            src={logoIcon}
            alt="כליל דורי"
            className="h-12 md:h-14 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="hidden sm:flex flex-col text-right leading-tight">
            <span className="font-display text-xl font-extrabold text-primary tracking-tight">כליל דורי</span>
            <span className="font-body text-xs text-muted-foreground tracking-wide">תזונאית קלינית</span>
          </div>
        </a>

        {/* Center: Nav links (desktop) */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item, i) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.target)}
              className="relative px-5 py-2 text-sm font-display font-semibold text-foreground/70 hover:text-primary transition-colors group"
            >
              {item.label}
              <span className="absolute bottom-0 right-1/2 translate-x-1/2 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-3/4" />
              {i < navItems.length - 1 && <span className="mr-4 text-border/50">|</span>}
            </button>
          ))}
        </nav>

        {/* Left: CTA button (desktop) */}
        <motion.button
          onClick={() => window.open("https://wa.me/972559272658", "_blank")}
          whileHover={{ scale: 1.04, boxShadow: "0 8px 25px rgba(94, 23, 235, 0.3)" }}
          whileTap={{ scale: 0.97 }}
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-purple text-white px-7 py-2.5 text-sm font-display font-bold shadow-md transition-all"
        >
          <CalendarDays className="h-4 w-4" />
          לתיאום פגישת ייעוץ
        </motion.button>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-foreground p-2 min-w-[48px] min-h-[48px] flex items-center justify-center rounded-xl hover:bg-muted transition-colors"
          aria-label="תפריט"
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Menu className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-white/98 backdrop-blur-xl border-t border-purple-100 px-6 py-5 flex flex-col gap-1 overflow-hidden"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => scrollTo(item.target)}
                className="text-right px-5 py-4 rounded-2xl text-base font-display font-semibold text-foreground/80 hover:text-primary hover:bg-purple-50 transition-all active:scale-[0.98]"
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              onClick={() => { setMenuOpen(false); window.open("https://wa.me/972559272658", "_blank"); }}
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-gradient-purple text-white px-6 py-3.5 text-sm font-display font-bold shadow-lg active:scale-95 transition-transform"
            >
              <CalendarDays className="h-4 w-4" />
              לתיאום פגישת ייעוץ
            </motion.button>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default LogoBanner;
