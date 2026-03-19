import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";

const points = [
  {
    title: "סדרת פגישות ייעוץ תזונתי אונליין",
    details: "פגישות אישיות מותאמות לצרכים שלך, בנוחות מהבית, עם מעקב והתקדמות מדידה.",
  },
  {
    title: "בניית תפריט תזונתי בהתאם למצב הבריאותי, בדיקות הדם, ההעדפות ואורח החיים",
    details: "תפריט מותאם אישית שלוקח בחשבון את כל הפרמטרים הבריאותיים והאישיים שלך.",
  },
  {
    title: "התאמת פרוטוקול תוספי תזונה מותאם מטרות ומבוסס ספרות עדכנית",
    details: "פרוטוקול תוספים מבוסס מחקר, מותאם למטרות האישיות שלך.",
  },
  {
    title: "ליווי ותמיכה שוטפת בין המפגשים, כולל מענה לשאלות והתאמות לפי הצורך",
    details: "תמיכה רציפה לאורך כל התהליך, כולל מענה מהיר לשאלות והתאמות בזמן אמת.",
  },
  {
    title: "מתן כלים פרקטיים לשינוי הרגלים, ויסות אכילה, ניהול סטרס ושמירה על התוצאות לאורך זמן",
    details: "כלים מעשיים שילוו אותך גם אחרי סיום התהליך לשמירה על אורח חיים בריא.",
  },
];

const ProgramSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="program" className="py-24 bg-secondary">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-right"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            מוצרים ושירותים
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-12">
            מה כוללת תוכנית הליווי התזונתי:
          </p>

          <ul className="space-y-4 mb-12">
            {points.map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="rounded-2xl bg-background border border-border overflow-hidden"
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
                    className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
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

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="rounded-2xl bg-background border border-border p-6 text-center"
          >
            <p className="text-lg font-body text-foreground">
              ידעת? ניתן לקבל החזר של עד <span className="font-bold text-primary">80%</span> מהביטוחים הפרטיים!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramSection;
