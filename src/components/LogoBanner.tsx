import { useState, useCallback } from "react";
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

  const scrollTo = useCallback((id: string) => {
    setMenuOpen(false);
    // Small delay to allow menu close animation before scrolling
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100"
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-18 md:h-20">
        {/* Right side: Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logoIcon}
            alt="כליל דורי"
            className="h-12 md:h-14 w-auto object-contain"
            style={{ background: "transparent" }}
          />
          <div className="hidden sm:flex flex-col text-right leading-tight">
            <span className="font-display text-lg font-extrabold text-primary">כליל דורי</span>
            <span className="font-body text-xs text-muted-foreground">תזונאית קלינית</span>
          </div>
        </div>

        {/* Center: Nav links (desktop) - RTL order */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item, i) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.target)}
              className="px-4 py-2 text-sm font-display font-semibold text-foreground/70 hover:text-primary transition-colors"
            >
              {item.label}
              {i < navItems.length - 1 && <span className="mr-3 text-border">|</span>}
            </button>
          ))}
        </nav>

        {/* Left: CTA button (desktop) */}
        <motion.button
          onClick={() => window.open("https://wa.me/972559272658", "_blank")}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-secondary text-secondary-foreground px-6 py-2.5 text-sm font-display font-bold shadow-md hover:shadow-lg transition-shadow"
        >
          <CalendarDays className="h-4 w-4" />
          לתיאום פגישת ייעוץ
        </motion.button>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-foreground p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="תפריט"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-1"
            style={{ willChange: "height, opacity" }}
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.target)}
                className="text-right px-4 py-3 rounded-xl text-sm font-display font-semibold text-foreground/70 hover:text-primary hover:bg-muted transition-all active:bg-muted"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => { setMenuOpen(false); window.open("https://wa.me/972559272658", "_blank"); }}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-secondary text-secondary-foreground px-6 py-3 text-sm font-display font-bold active:scale-95 transition-transform"
            >
              <CalendarDays className="h-4 w-4" />
              לתיאום פגישת ייעוץ
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default LogoBanner;
