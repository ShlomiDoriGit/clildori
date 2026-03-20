import { motion } from "framer-motion";
import { Instagram, Mail } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";

const Footer = () => (
  <footer id="footer" className="bg-gradient-to-b from-secondary to-primary/10 py-20">
    <div className="container mx-auto px-6 text-center">
      <motion.img
        src={logoIcon}
        alt="כליל דורי"
        className="h-20 md:h-24 w-auto mx-auto mb-6 object-contain opacity-80"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 0.8, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      />

      <motion.h3
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3"
      >
        לרכישה ותיאום פגישה
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25 }}
        className="text-muted-foreground font-body text-lg mb-8"
      >
        תתחלך תזונה תזונתי מותאם אישית נטף ולנפש
      </motion.p>

      <motion.a
        href="https://wa.me/972559272658"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-10 py-4 text-lg font-display font-bold shadow-lg transition-shadow hover:shadow-xl mb-12"
      >
        גם אני רוצה להתחיל
      </motion.a>

      <div className="flex justify-center gap-5 mb-6">
        <a
          href="https://www.instagram.com/clildori"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:scale-105 active:scale-95"
          aria-label="Instagram"
        >
          <Instagram className="h-5 w-5" />
        </a>
        <a
          href="mailto:clildori@gmail.com"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:scale-105 active:scale-95"
          aria-label="Email"
        >
          <Mail className="h-5 w-5" />
        </a>
      </div>

      <p className="text-sm text-muted-foreground font-body">
        clildori@gmail.com &nbsp;|&nbsp; @clildori
      </p>
      <p className="text-xs text-muted-foreground/60 font-body mt-4">
        © {new Date().getFullYear()} כליל דורי — כל הזכויות שמורות
      </p>
    </div>
  </footer>
);

export default Footer;
