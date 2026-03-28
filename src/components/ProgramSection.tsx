import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Video, ClipboardList, Pill, HeartHandshake, Wrench } from "lucide-react";

const points = [
  { title: "ייעוץ תזונתי אונליין", details: "סדרת פגישות ייעוץ תזונתי אונליין המותאמות אליך אישית.", icon: Video },
  { title: "בניית תפריט מותאם אישית", details: "בניית תפריט תזונתי בהתאם למצב הבריאותי, בדיקות הדם, ההעדפות ואורח החיים שלך.", icon: ClipboardList },
  { title: "פרוטוקול תוספי תזונה", details: "התאמת פרוטוקול תוספי תזונה מותאם מטרות ומבוסס ספרות עדכנית.", icon: Pill },
  { title: "ליווי ותמיכה שוטפת", details: "ליווי ותמיכה שוטפת בין המפגשים, כולל מענה לשאלות והתאמות לפי הצורך.", icon: HeartHandshake },
  { title: "כלים לשינוי הרגלים", details: "מתן כלים פרקטיים לשינוי הרגלים, ויסות אכילה, ניהול סטרס ושמירה על התוצאות לאורך זמן.", icon: Wrench },
];

const ProgramSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="program" className="section-padding bg-white relative">
      {/* Decorative top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-purple" />

      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block font-body text-sm font-semibold text-primary bg-primary/10 rounded-full px-4 py-1.5 mb-4">
            ליווי תזונתי
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            התהליך בקליניקה
          </h2>
        </motion.div>

        {/* Icon cards row — ALWAYS horizontal on all screen sizes */}
        <div className="grid grid-cols-5 gap-2 sm:gap-4 md:gap-6 max-w-5xl mx-auto mb-4">
          {points.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, boxShadow: "0 16px 40px rgba(94, 23, 235, 0.15)" }}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className={`flex flex-col items-center text-center p-2 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl md:rounded-3xl border-2 transition-all duration-300 cursor-pointer ${
                  openIndex === i
                    ? "border-primary bg-primary/5 shadow-lg"
                    : "border-transparent bg-muted hover:border-primary/20"
                }`}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4 transition-colors duration-300 ${
                  openIndex === i ? "bg-gradient-purple text-white" : "bg-primary/10 text-primary"
                }`}>
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
                </div>
                <span className="font-display text-[10px] sm:text-xs md:text-sm font-bold text-foreground leading-tight">
                  {point.title}
                </span>
                <ChevronDown className={`h-3 w-3 sm:h-4 sm:w-4 text-primary mt-1 sm:mt-2 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`} />
              </motion.button>
            );
          })}
        </div>

        {/* Expanded detail */}
        <AnimatePresence>
          {openIndex !== null && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden max-w-3xl mx-auto"
            >
              <div className="bg-muted rounded-2xl p-4 sm:p-6 text-center mb-6">
                <p className="text-muted-foreground font-body text-sm sm:text-base leading-relaxed">
                  {points[openIndex].details}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Insurance note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-xs sm:text-sm text-muted-foreground font-body mt-8 bg-green-50 text-green-700 rounded-full px-4 sm:px-6 py-2.5 max-w-max mx-auto"
        >
          💡 ביטוחים פרטיים רבים מכסים עד 80% מעלות ייעוץ תזונתי
        </motion.p>
      </div>
    </section>
  );
};

export default ProgramSection;
