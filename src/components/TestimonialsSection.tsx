import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Play, Star, ExternalLink } from "lucide-react";
import successThumbnail from "@/assets/success-thumbnail.jpeg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";

const testimonials = [
  { image: testimonial1, alt: "תוצאות מדהימות - לפני ואחרי" },
  { image: testimonial2, alt: "שיפור משמעותי בבריאות" },
  { image: testimonial3, alt: "חוויה מעולה עם כליל" },
  { image: testimonial4, alt: "שינוי אמיתי ובריא" },
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
      <section className="section-padding bg-muted relative">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              סיפורי הצלחה
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="max-w-xl mx-auto"
          >
            <a
              href="https://rb.gy/vfpdqu"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative group rounded-3xl overflow-hidden shadow-xl glow-purple"
            >
              <div className="relative aspect-video">
                <img src={successThumbnail} alt="סיפורי הצלחה" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent group-hover:from-black/60 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/95 flex items-center justify-center shadow-2xl group-hover:bg-white transition-colors"
                  >
                    <Play className="w-6 h-6 md:w-8 md:h-8 text-primary fill-primary mr-[-2px]" />
                  </motion.div>
                </div>
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <p className="text-white font-display font-bold text-sm md:text-base drop-shadow-lg">
                    לחצו על מנת לצפות בוידאו
                  </p>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              מטופלים מספרים
            </h2>
          </motion.div>

          <div className="relative max-w-sm mx-auto">
            <button
              onClick={() => go(-1)}
              className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-xl hover:border-primary/20 transition-all active:scale-95"
              aria-label="הקודם"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <button
              onClick={() => go(1)}
              className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-xl hover:border-primary/20 transition-all active:scale-95"
              aria-label="הבא"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="rounded-3xl overflow-hidden shadow-xl"
              >
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].alt}
                  className="w-full aspect-[3/4] object-cover"
                  loading="lazy"
                />
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-2.5 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-primary w-8 h-3"
                      : "bg-gray-200 w-3 h-3 hover:bg-gray-300"
                  }`}
                  aria-label={`עדות ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mx-auto"
          >
            <a
              href="https://share.google/ZNUa767hxjoUiRSkQ"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 p-10 md:p-12 text-center group border border-gray-100 hover:border-primary/20"
            >
              <div className="flex items-center justify-center gap-3 mb-5">
                <svg className="w-11 h-11" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59a14.5 14.5 0 0 1 0-9.18l-7.98-6.19a24.01 24.01 0 0 0 0 21.56l7.98-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                </svg>
                <span className="font-display text-2xl font-bold text-foreground">ביקורות Google</span>
              </div>
              <div className="flex items-center justify-center gap-1 mb-6">
                {[1,2,3,4,5].map(s => (
                  <Star key={s} className="w-7 h-7 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <motion.span
                whileHover={{ scale: 1.03 }}
                className="inline-flex items-center gap-2 font-display text-base font-bold text-white bg-gradient-purple rounded-full px-8 py-3.5 shadow-md group-hover:shadow-lg transition-all"
              >
                לחצו לצפייה בכל הביקורות
              </motion.span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Article Section — כתבה */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block font-body text-sm font-semibold text-primary bg-primary/10 rounded-full px-4 py-1.5 mb-4">
              בתקשורת
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              כליל דורי בתקשורת
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <a
              href="https://www.makorrishon.co.il/good-to-know/article/174541"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-3xl bg-muted border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Article image */}
              <div className="relative h-48 md:h-64 overflow-hidden">
                <img
                  src={successThumbnail}
                  alt="כתבה על כליל דורי"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 right-6">
                  <span className="bg-white/90 backdrop-blur-sm text-primary font-display font-bold text-xs rounded-full px-3 py-1.5">
                    מקור ראשון
                  </span>
                </div>
              </div>

              {/* Article content */}
              <div className="p-6 md:p-8 text-right">
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  ירידה במשקל מבלי לוותר — איך תזונה מותאמת אישית משנה את החוקים
                </h3>
                <p className="text-sm text-muted-foreground font-body mb-4">
                  מאת כליל דורי, תזונאית קלינית
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-display font-semibold text-sm group-hover:underline">
                  לצפייה בכתבה המלאה
                  <ExternalLink className="h-4 w-4" />
                </span>
              </div>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;
