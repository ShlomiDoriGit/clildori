import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import successThumbnail from "@/assets/success-thumbnail.jpeg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";

const testimonials = [
  { image: testimonial1, alt: "תוצאות מדהימות - לפני ואחרי" },
  { image: testimonial2, alt: "הכולסטרול ירד מ-400 ל-100" },
  { image: testimonial3, alt: "את לא רק דיאטנית את גם מנטורית" },
  { image: testimonial4, alt: "שיפור משמעותי ומשמח" },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const go = (dir: number) =>
    setCurrent((p) => (p + dir + testimonials.length) % testimonials.length);

  return (
    <>
      {/* Video Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
          >
            צפו בסיפורי ההצלחה
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-xl"
          >
            <a href="https://rb.gy/vfpdqu" target="_blank" rel="noopener noreferrer" className="block relative group">
              <div className="relative aspect-video">
                <img src={successThumbnail} alt="סיפורי הצלחה" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-8 h-8 text-primary-foreground mr-[-2px]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </motion.div>

          <p className="text-center text-muted-foreground font-body text-base mt-6">
            צפו בסיפורי ההצלחה
          </p>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
          >
            מטופלים מספרים
          </motion.h2>

          <div className="relative max-w-sm mx-auto">
            <button
              onClick={() => go(-1)}
              className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-14 z-10 w-10 h-10 rounded-full bg-background shadow-md flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors active:scale-95"
              aria-label="הקודם"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => go(1)}
              className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-14 z-10 w-10 h-10 rounded-full bg-background shadow-md flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors active:scale-95"
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
                className="rounded-2xl overflow-hidden shadow-lg bg-background"
              >
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].alt}
                  className="w-full h-[420px] object-contain"
                  loading="lazy"
                />
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${i === current ? "bg-primary w-6" : "bg-muted-foreground/30 w-2.5"}`}
                  aria-label={`עדות ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;
