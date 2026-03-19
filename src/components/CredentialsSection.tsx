import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import cert1 from "@/assets/cert-1.jpg";
import cert2 from "@/assets/cert-2.jpg";
import cert3 from "@/assets/cert-3.jpg";
import cert4 from "@/assets/cert-4.jpg";

const certs = [
  { image: cert1, alt: "תעודת תזונאית-דיאטנית ממשרד הבריאות" },
  { image: cert2, alt: "תואר B.Sc.Nutr במדעי התזונה - האוניברסיטה העברית" },
  { image: cert3, alt: "תעודת מיומנויות בהנחיית קבוצות" },
  { image: cert4, alt: "תעודת קורס הפרעות אכילה במעגל החיים" },
];

const CredentialsSection = () => {
  const [current, setCurrent] = useState(0);

  const go = (dir: number) =>
    setCurrent((prev) => (prev + dir + certs.length) % certs.length);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4"
        >
          הסמכות מקצועיות
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-muted-foreground font-body text-lg mb-12 max-w-xl mx-auto"
        >
          השכלה והכשרות מקצועיות מהמוסדות המובילים
        </motion.p>

        <div className="relative max-w-lg mx-auto">
          <button
            onClick={() => go(-1)}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-14 z-10 w-10 h-10 rounded-full bg-card shadow-md flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            aria-label="הקודם"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <button
            onClick={() => go(1)}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-14 z-10 w-10 h-10 rounded-full bg-card shadow-md flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            aria-label="הבא"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="rounded-3xl overflow-hidden shadow-lg bg-card"
            >
              <img
                src={certs[current].image}
                alt={certs[current].alt}
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-6">
            {certs.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === current ? "bg-primary w-6" : "bg-muted-foreground/30"
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
