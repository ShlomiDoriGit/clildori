import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import certDietitian from "@/assets/cert-dietitian.jpeg";
import certUniversity from "@/assets/cert-university.jpeg";
import certGroups from "@/assets/cert-groups.jpeg";

const certs = [
  { image: certDietitian, alt: "תעודת תזונאית-דיאטנית ממשרד הבריאות" },
  { image: certUniversity, alt: "תואר B.Sc.Nutr במדעי התזונה - האוניברסיטה העברית" },
  { image: certGroups, alt: "תעודת מיומנויות בהנחיית קבוצות" },
];

const CredentialsSection = () => {
  const [current, setCurrent] = useState(0);

  const go = (dir: number) =>
    setCurrent((prev) => (prev + dir + certs.length) % certs.length);

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4"
        >
          מי אני
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="text-center text-muted-foreground font-body text-lg mb-6 max-w-2xl mx-auto"
        >
          אני כליל דורי, תזונאית קלינית בוגרת האוניברסיטה העברית בירושלים. מלווה נשים וגברים בתהליכי ירידה במשקל, איזון מטבולי ושיפור אורח חיים, תוך התייחסות להיבטים רגשיים והתנהגותיים של האכילה.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-display text-xl md:text-2xl font-bold text-foreground text-center mb-12"
        >
          הסמכות מקצועיות
        </motion.h3>

        <div className="relative max-w-lg mx-auto">
          <button
            onClick={() => go(-1)}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-14 z-10 w-10 h-10 rounded-full bg-card shadow-md flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors active:scale-95"
            aria-label="הקודם"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <button
            onClick={() => go(1)}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-14 z-10 w-10 h-10 rounded-full bg-card shadow-md flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors active:scale-95"
            aria-label="הבא"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="rounded-2xl overflow-hidden shadow-lg bg-card"
            >
              <img
                src={certs[current].image}
                alt={certs[current].alt}
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </motion.div>
          </AnimatePresence>

          <p className="text-center font-body text-sm text-muted-foreground mt-4 mb-2">
            {certs[current].alt}
          </p>

          <div className="flex justify-center gap-2 mt-2">
            {certs.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-primary w-6" : "bg-muted-foreground/30 w-2.5"
                }`}
                aria-label={`תעודה ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
