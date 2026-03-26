import { useState } from "react";
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

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const openWhatsApp = () => {
    setMenuOpen(false);
    window.open("https://wa.me/972559272658", "_blank");
  };

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-gray-100 shadow-sm"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-18 md:h-20 py-3">
        {/* Right: Logo */}
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

        {/* Center: Nav links (desktop) */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item, i) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.target)}
              className="px-4 py-2 text-sm font-display font-semibold text-foreground/70 hover:text-primary transition-colors"
            >
              {item.label}
              {i < navItems.length - 1 && <span className="mr-3 text-gray-300">|</span>}
            </button>
          ))}
        </nav>

        {/* Left: CTA (desktop) */}
        <motion.button
          onClick={openWhatsApp}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-secondary text-secondary-foreground px-6 py-2.5 text-sm font-display font-bold shadow-md hover:shadow-lg transition-shadow"
        >
          <CalendarDays className="h-4 w-4" />
          לתיאום פגישת ייעוץ
        </motion.button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden text-foreground p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="תפריט"
          type="button"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-1 overflow-hidden shadow-lg"
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.target)}
                type="button"
                className="text-right w-full px-4 py-3 rounded-xl text-sm font-display font-semibold text-foreground/70 hover:text-primary hover:bg-muted transition-all"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={openWhatsApp}
              type="button"
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
