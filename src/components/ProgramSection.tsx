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

        {/* Icon cards: Mobile 2+2+1, Desktop 5 in a row */}
        <div className="max-w-5xl mx-auto mb-4">
          {/* First row: 2 cards */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
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
                  className={`flex flex-col items-center text-center p-3 sm:p-4 md:p-6 rounded-2xl md:rounded-3xl border-2 transition-all duration-300 cursor-pointer ${
                    i === 4 ? "col-span-2 md:col-span-1 max-w-[200px] mx-auto w-full" : ""
                  } ${
                    openIndex === i
                      ? "border-primary bg-primary/5 shadow-lg"
                      : "border-transparent bg-muted hover:border-primary/20"
                  }`}
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4 transition-colors duration-300 ${
                    openIndex === i ? "bg-gradient-purple text-white" : "bg-primary/10 text-primary"
                  }`}>
                    <Icon className="h-6 w-6 sm:h-6 sm:w-6 md:h-7 md:w-7" />
                  </div>
                  <span className="font-display text-xs sm:text-sm md:text-sm font-bold text-foreground leading-tight">
                    {point.title}
                  </span>
                  <ChevronDown className={`h-4 w-4 text-primary mt-2 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`} />
                </motion.button>
              );
            })}
          </div>
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
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-10 max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl px-6 sm:px-8 py-5 text-center shadow-md">
            <p className="font-display text-base sm:text-lg md:text-xl font-bold text-green-800">
              💡 ביטוחים פרטיים רבים מכסים עד 80% מעלות ייעוץ תזונתי
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramSection;
