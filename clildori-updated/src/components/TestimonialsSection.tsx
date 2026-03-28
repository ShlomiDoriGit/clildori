import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Star } from "lucide-react";
import successThumbnail from "@/assets/תמונת סיפורי הצלחה אתר כליל דורי.jpg";
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
          >
            סיפורי הצלחה
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-xl"
          >
            <a href="https://rb.gy/vfpdqu" target="_blank" rel="noopener noreferrer" className="block relative group">
              <div className="relative aspect-video">
                <img src={successThumbnail} alt="סיפורי הצלחה" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </motion.div>
          <p className="text-center text-gray-800 font-body text-lg mt-6 font-semibold">
            לחצו על מנת לצפות בוידאו
          </p>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl font-bold mb-10">מטופלים מספרים</h2>
          <div className="relative max-w-xl mx-auto flex items-center justify-center h-80">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={testimonials[current].image}
                alt={testimonials[current].alt}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="absolute w-full h-full object-contain rounded-xl shadow-md"
              />
            </AnimatePresence>
            <button onClick={() => go(-1)} className="absolute -left-4 md:-left-12 bg-white rounded-full p-2 shadow z-10 hover:bg-gray-100">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={() => go(1)} className="absolute -right-4 md:-right-12 bg-white rounded-full p-2 shadow z-10 hover:bg-gray-100">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold mb-4 font-display flex items-center justify-center gap-2">
            מה אומרים עלינו בגוגל?
            <Star className="text-yellow-400 fill-current w-8 h-8" />
          </h3>
          <p className="text-gray-600 mb-8 max-w-md mx-auto text-lg">
            מוזמנים לקרוא עשרות ביקורות של מטופלים שעברו תהליך בקליניקה.
          </p>
          <a
            href="https://share.google/ZNUa767hxjoUiRSkQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#4285F4] hover:bg-[#3367D6] text-white font-medium px-8 py-4 rounded-full transition-colors shadow-lg text-lg"
          >
            לחצו לצפייה בכל הביקורות
          </a>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;
