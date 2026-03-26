import { motion } from "framer-motion";
import { CalendarDays, Mail, Instagram } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";
import footerBgNew from "@/assets/footer-bg-new.png";

const Footer = () => (
  <footer
    id="footer"
    className="relative py-20 md:py-28 overflow-hidden"
    style={{
      backgroundImage: `url(${footerBgNew})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    {/* Logo watermark — single, no-tile */}
    <img
      src={logoIcon}
      alt=""
      aria-hidden="true"
      className="absolute bottom-8 left-8 h-24 md:h-32 w-auto object-contain pointer-events-none"
      style={{ opacity: 0.08, background: "transparent" }}
    />

    <div className="container mx-auto px-6 text-center relative z-10">
      <motion.h3
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2"
      >
        כליל דורי
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="text-muted-foreground font-body text-lg mb-8"
      >
        תהליך תזונתי מותאם אישית לגוף ולנפש
      </motion.p>

      <motion.a
        href="https://wa.me/972559272658"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25, duration: 0.5 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex items-center gap-2 rounded-full bg-secondary text-secondary-foreground px-10 py-4 text-lg font-display font-bold shadow-lg hover:shadow-xl transition-shadow mb-8"
      >
        <CalendarDays className="h-5 w-5" />
        לקביעת שיחת היכרות
      </motion.a>

      {/* Social icons only — no text labels */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35 }}
        className="flex items-center justify-center gap-6 mb-8"
      >
        <a
          href="https://www.instagram.com/clildori/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg hover:scale-110 transition-all text-primary"
        >
          <Instagram className="h-6 w-6" />
        </a>
        <a
          href="mailto:clildori@gmail.com"
          aria-label="Email"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg hover:scale-110 transition-all text-primary"
        >
          <Mail className="h-6 w-6" />
        </a>
      </motion.div>

      <p className="text-xs text-muted-foreground/60 font-body mt-4">
        © {new Date().getFullYear()} כליל דורי — כל הזכויות שמורות
      </p>
    </div>
  </footer>
);

export default Footer;
