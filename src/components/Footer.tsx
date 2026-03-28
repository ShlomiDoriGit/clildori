import { motion } from "framer-motion";
import { CalendarDays, Mail, Instagram } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";
import footerBg from "@/assets/footer-bg.png";

const Footer = () => (
  <footer
    id="footer"
    className="relative py-20 md:py-28 overflow-hidden"
    style={{
      backgroundImage: `url(${footerBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    {/* Overlay for readability */}
    <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />

    {/* Logo watermark */}
    <img
      src={logoIcon}
      alt=""
      className="absolute bottom-8 left-8 h-28 md:h-36 w-auto object-contain opacity-[0.06] pointer-events-none"
    />

    <div className="container mx-auto px-6 md:px-8 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={logoIcon}
          alt="כליל דורי"
          className="h-16 md:h-20 w-auto mx-auto mb-4 object-contain"
        />
        <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
          כליל דורי
        </h3>
        <p className="text-muted-foreground font-body text-lg mb-10 max-w-md mx-auto">
          תהליך תזונתי מותאם אישית לגוף ולנפש
        </p>
      </motion.div>

      <motion.a
        href="https://wa.me/972559272658"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        whileHover={{ scale: 1.05, boxShadow: "0 12px 40px rgba(94, 23, 235, 0.35)" }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex items-center gap-3 rounded-full bg-gradient-purple text-white px-10 py-4 text-lg font-display font-bold shadow-xl transition-all mb-10"
      >
        <CalendarDays className="h-5 w-5" />
        לקביעת שיחת היכרות
      </motion.a>

      {/* Social icons */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35 }}
        className="flex items-center justify-center gap-5 mb-10"
      >
        <a
          href="https://www.instagram.com/clildori/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-2xl bg-white shadow-lg border border-gray-100 flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300"
          aria-label="Instagram"
        >
          <Instagram className="h-7 w-7" />
        </a>
        <a
          href="mailto:clildori@gmail.com"
          className="w-14 h-14 rounded-2xl bg-white shadow-lg border border-gray-100 flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300"
          aria-label="Email"
        >
          <Mail className="h-7 w-7" />
        </a>
      </motion.div>

      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent max-w-md mx-auto mb-6" />

      <p className="text-xs text-muted-foreground/60 font-body">
        © {new Date().getFullYear()} כליל דורי — כל הזכויות שמורות
      </p>
    </div>
  </footer>
);

export default Footer;
