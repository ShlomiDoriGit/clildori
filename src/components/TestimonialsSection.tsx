import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";

const testimonials = [
  {
    image: testimonial1,
    alt: "תוצאות מדהימות - ירידה מ-79 ל-72 ק״ג בזמן קצר",
  },
  {
    image: testimonial2,
    alt: "הכולסטרול ירד מ-400 ל-100 בזכות הטיפול",
  },
  {
    image: testimonial3,
    alt: "את לא רק דיאטנית את גם ממש מנטורית - ירידה של קילו בשבוע",
  },
  {
    image: testimonial4,
    alt: "שיפור משמעותי ומשמח - עבודה מקצועית ונהדרת",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const go = (dir: number) => {
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-6"
        >
          מטופלים מספרים
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-muted-foreground font-body text-lg mb-16 max-w-xl mx-auto"
        >
          סיפורי הצלחה אמיתיים מלקוחות שעברו את התהליך
        </motion.p>

        {/* Carousel */}
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
                src={testimonials[current].image}
                alt={testimonials[current].alt}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === current ? "bg-primary w-6" : "bg-muted-foreground/30"
                }`}
                aria-label={`עדות ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Success stories link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://rb.gy/vfpdqu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold font-body hover:underline text-lg"
          >
            צפו בסיפורי ההצלחה שלנו
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href="https://wa.me/972559272658"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg transition-all hover:shadow-xl hover:scale-105"
          >
            גם אני רוצה להתחיל
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
