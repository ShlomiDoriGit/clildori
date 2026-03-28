import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, CalendarDays } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";
import heroBg from "@/assets/hero-footer-bg.jpeg";

const navItems = [
  { label: "התהליך בקליניקה", target: "program" },
  { label: "מוצרים", target: "products" },
  { label: "מי אני", target: "about" },
];

const LogoBanner = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-white/20 backdrop-blur-sm"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
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
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-foreground p-1" aria-label="תפריט">
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
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/80 backdrop-blur-md border-t border-border/40 px-6 py-4 flex flex-col gap-1 overflow-hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.target)}
                className="text-right px-4 py-3 rounded-xl text-sm font-display font-semibold text-foreground/70 hover:text-primary hover:bg-muted transition-all"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => { setMenuOpen(false); window.open("https://wa.me/972559272658", "_blank"); }}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-secondary text-secondary-foreground px-6 py-3 text-sm font-display font-bold"
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
