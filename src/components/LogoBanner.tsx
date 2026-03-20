import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";
import headerBg from "@/assets/header-bg.jpeg";

const navItems = [
  { label: "התהליך בקליניקה", target: "program" },
  { label: "מוצרים", target: "products" },
  { label: "מי אני", target: "about" },
];

const LogoBanner = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 w-full"
      style={{
        backgroundImage: `url(${headerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-20 md:h-24">
        {/* Logo + brand text - right side in RTL */}
        <div className="flex items-center gap-3">
          <motion.img
            src={logoIcon}
            alt="כליל דורי"
            className="h-14 md:h-18 w-auto object-contain"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          />
          <div className="hidden sm:flex flex-col text-right leading-tight">
            <span className="font-display text-lg md:text-xl font-extrabold text-primary">
              כליל דורי
            </span>
            <span className="font-body text-xs md:text-sm text-primary/70">
              תזונאית קלינית
            </span>
            <span className="font-body text-[10px] md:text-xs text-primary/60">
              תזונה מותאמת <span className="font-bold">גוף ונפש</span>
            </span>
          </div>
        </div>

        {/* Nav - Desktop */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item, i) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.target)}
              className="px-4 py-2 rounded-full text-sm font-display font-semibold text-primary/80 hover:text-primary hover:bg-white/30 transition-all"
            >
              {item.label}
              {i < navItems.length - 1 && (
                <span className="mr-3 text-primary/30">|</span>
              )}
            </button>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-primary p-1"
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
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/90 backdrop-blur-md border-t border-primary/10 px-6 py-4 flex flex-col gap-1 overflow-hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.target)}
                className="text-right px-4 py-3 rounded-xl text-sm font-display font-semibold text-primary/80 hover:text-primary hover:bg-primary/5 transition-all"
              >
                {item.label}
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default LogoBanner;
