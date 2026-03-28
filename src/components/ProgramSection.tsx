import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, Video, ClipboardList, Pill, HeartHandshake, Wrench } from "lucide-react";

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

      <div className="container mx-auto px-6 md:px-8">
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

        {/* Icon cards row - shown on larger screens */}
        <div className="hidden md:grid md:grid-cols-5 gap-6 max-w-5xl mx-auto mb-8">
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
                className={`flex flex-col items-center text-center p-6 rounded-3xl border-2 transition-all duration-300 cursor-pointer ${
                  openIndex === i
                    ? "border-primary bg-primary/5 shadow-lg"
                    : "border-transparent bg-muted hover:border-primary/20"
                }`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-colors duration-300 ${
                  openIndex === i ? "bg-gradient-purple text-white" : "bg-primary/10 text-primary"
                }`}>
                  <Icon className="h-7 w-7" />
                </div>
                <span className="font-display text-sm font-bold text-foreground leading-tight">
                  {point.title}
                </span>
                <ChevronDown className={`h-4 w-4 text-primary mt-2 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`} />
              </motion.button>
            );
          })}
        </div>

        {/* Expanded detail for desktop */}
        <AnimatePresence>
          {openIndex !== null && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="hidden md:block overflow-hidden max-w-3xl mx-auto"
            >
              <div className="bg-muted rounded-2xl p-6 text-center mb-8">
                <p className="text-muted-foreground font-body text-base leading-relaxed">
                  {points[openIndex].details}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile: accordion list */}
        <ul className="md:hidden space-y-3 max-w-lg mx-auto">
          {points.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="rounded-2xl bg-muted border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center gap-4 p-5 text-right"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="flex-1 text-base font-body font-semibold text-foreground">
                    {point.title}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 pr-16 text-sm text-muted-foreground font-body leading-relaxed">
                        {point.details}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </ul>

        {/* Insurance note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-muted-foreground font-body mt-10 bg-green-50 text-green-700 rounded-full px-6 py-2.5 max-w-max mx-auto"
        >
          💡 ביטוחים פרטיים רבים מכסים עד 80% מעלות ייעוץ תזונתי
        </motion.p>
      </div>
    </section>
  );
};

export default ProgramSection;
