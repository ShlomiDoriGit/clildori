import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";

const points = [
  { title: "ייעוץ תזונתי אונליין", details: "סדרת פגישות ייעוץ תזונתי אונליין המותאמות אליך אישית." },
  { title: "בניית תפריט מותאם אישית", details: "בניית תפריט תזונתי בהתאם למצב הבריאותי, בדיקות הדם, ההעדפות ואורח החיים שלך." },
  { title: "פרוטוקול תוספי תזונה", details: "התאמת פרוטוקול תוספי תזונה מותאם מטרות ומבוסס ספרות עדכנית." },
  { title: "ליווי ותמיכה שוטפת", details: "ליווי ותמיכה שוטפת בין המפגשים, כולל מענה לשאלות והתאמות לפי הצורך." },
  { title: "כלים לשינוי הרגלים", details: "מתן כלים פרקטיים לשינוי הרגלים, ויסות אכילה, ניהול סטרס ושמירה על התוצאות לאורך זמן." },
];

const ProgramSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="program" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-14"
        >
          התהליך בקליניקה
        </motion.h2>

        <ul className="space-y-3">
          {points.map((point, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="rounded-2xl bg-background border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center gap-4 p-5 text-right"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary">
                  <Check className="h-4 w-4 text-primary-foreground" />
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
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProgramSection;
