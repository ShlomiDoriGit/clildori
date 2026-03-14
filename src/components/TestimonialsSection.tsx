import { motion } from "framer-motion";
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

const TestimonialsSection = () => (
  <section className="py-24 bg-secondary">
    <div className="container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-6"
      >
        מטופלים מספרים 💜
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

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-card"
          >
            <img
              src={t.image}
              alt={t.alt}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center mt-16"
      >
        <a
          href="https://wa.me/972559272658"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg transition-all hover:shadow-xl hover:scale-105"
        >
          גם אני רוצה להתחיל ✨
        </a>
      </motion.div>
    </div>
  </section>
);

export default TestimonialsSection;
