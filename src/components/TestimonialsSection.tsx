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

          <p className="text-center text-muted-foreground font-body text-base mt-6 font-semibold">
            לחצו על מנת לצפות בוידאו
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

      {/* Google Reviews Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="max-w-lg mx-auto"
          >
            <a
              href="https://share.google/ZNUa767hxjoUiRSkQ"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-3xl border-2 border-primary/20 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 p-10 text-center group hover:border-primary/40"
            >
              <div className="flex items-center justify-center gap-3 mb-5">
                {/* Google G icon */}
                <svg className="w-12 h-12" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59a14.5 14.5 0 0 1 0-9.18l-7.98-6.19a24.01 24.01 0 0 0 0 21.56l7.98-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                </svg>
                <span className="font-display text-2xl font-bold text-foreground">ביקורות Google</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 mb-6">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} className="w-7 h-7 text-yellow-400 drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <motion.p
                whileHover={{ scale: 1.02 }}
                className="inline-block font-display text-lg font-bold text-white bg-primary rounded-full px-8 py-3 shadow-md group-hover:shadow-lg transition-all"
              >
                לחצו לצפייה בכל הביקורות
              </motion.p>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;
