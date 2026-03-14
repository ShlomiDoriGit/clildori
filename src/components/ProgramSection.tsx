import { motion } from "framer-motion";
import { Check } from "lucide-react";

const points = [
  "סדרת פגישות אונליין",
  "תפריט אישי מבוסס בדיקות דם",
  "פרוטוקול תוספים מותאם",
  "וליווי צמוד בין המפגשים",
];

const ProgramSection = () => (
  <section className="py-24 bg-secondary">
    <div className="container mx-auto px-6 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-right"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
          מה כוללת תוכנית הליווי?
        </h2>

        <ul className="space-y-6 mb-12">
          {points.map((point, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex items-center gap-4 text-lg font-body text-foreground"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary">
                <Check className="h-4 w-4 text-primary-foreground" />
              </span>
              {point}
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
            💸 ידעת? ניתן לקבל החזר של עד <span className="font-bold text-primary">80%</span> מהביטוחים הפרטיים!
          </p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default ProgramSection;
