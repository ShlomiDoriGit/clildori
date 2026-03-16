import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoCircle from "@/assets/logo-circle.png";

const navItems = ["דף בית", "מי אני", "מוצרים", "צרו קשר"];

const LogoBanner = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (label: string) => {
    setMenuOpen(false);
    const sectionMap: Record<string, string> = {
      "דף בית": "hero",
      "מי אני": "hero",
      "מוצרים": "products",
      "צרו קשר": "footer",
    };
    const el = document.getElementById(sectionMap[label] || "hero");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border"
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Nav - Desktop */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="px-4 py-2 rounded-full text-sm font-display font-semibold text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-foreground"
          aria-label="תפריט"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Logo */}
        <motion.img
          src={logoCircle}
          alt="כליל דורי"
          className="h-12 md:h-16 w-auto object-contain"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background border-t border-border px-6 py-4 flex flex-col gap-2"
        >
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-right px-4 py-3 rounded-xl text-sm font-display font-semibold text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all"
            >
              {item}
            </button>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
};

export default LogoBanner;
