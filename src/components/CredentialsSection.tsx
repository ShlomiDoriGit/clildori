import { motion } from "framer-motion";
import certDietitian from "@/assets/cert-dietitian.jpeg";
import certUniversity from "@/assets/cert-university.jpeg";
import certGroups from "@/assets/cert-groups.jpeg";

const certs = [
  { image: certDietitian, alt: "תעודת תזונאית-דיאטנית ממשרד הבריאות" },
  { image: certUniversity, alt: "תואר B.Sc.Nutr במדעי התזונה - האוניברסיטה העברית" },
  { image: certGroups, alt: "תעודת מיומנויות בהנחיית קבוצות" },
];

const CredentialsSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4"
        >
          מי אני
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="text-center text-muted-foreground font-body text-lg mb-6 max-w-2xl mx-auto"
        >
          אני כליל דורי, תזונאית קלינית בוגרת האוניברסיטה העברית בירושלים. מלווה נשים וגברים בתהליכי ירידה במשקל, איזון מטבולי ושיפור אורח חיים, תוך התייחסות להיבטים רגשיים והתנהגותיים של האכילה.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center text-muted-foreground font-body text-base mb-6 max-w-2xl mx-auto leading-relaxed"
        >
          בעלת ניסיון קליני מגוון בתחומי תזונה קלינית, ספורטיבית ובריאותית. מאמינה בגישה הוליסטית המשלבת ידע מדעי מבוסס ראיות עם הקשבה עמוקה לצרכים הרגשיים והפיזיים של כל מטופל ומטופלת.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="text-center text-muted-foreground font-body text-base mb-16 max-w-2xl mx-auto leading-relaxed"
        >
          המטרה שלי היא לעזור לך לבנות מערכת יחסים בריאה ומאוזנת עם אוכל, עם הגוף שלך ועם עצמך — בקצב שלך, בדרך שלך.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-display text-xl md:text-2xl font-bold text-foreground text-center mb-12"
        >
          הסמכות מקצועיות
        </motion.h3>

        {/* Static 2-per-row grid */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`rounded-xl border-2 border-border/60 bg-card shadow-sm overflow-hidden p-3 ${
                certs.length % 2 !== 0 && i === certs.length - 1
                  ? "sm:col-span-2 sm:max-w-[50%] sm:mx-auto"
                  : ""
              }`}
            >
              <img
                src={cert.image}
                alt={cert.alt}
                className="w-full h-auto object-contain rounded-lg"
                loading="lazy"
              />
              <p className="text-center font-body text-xs text-muted-foreground mt-2">
                {cert.alt}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
