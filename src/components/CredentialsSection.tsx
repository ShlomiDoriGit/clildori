import { motion } from "framer-motion";
import aboutMePhoto from "@/assets/about-me-new.jpeg";
import certDietitian from "@/assets/cert-dietitian.jpeg";
import certUniversity from "@/assets/cert-university.jpeg";
import certGroups from "@/assets/cert-groups.jpeg";
import certEatingDisorders from "@/assets/cert-eating-disorders.jpeg";

const certs = [
  { image: certDietitian, alt: "תעודת תזונאית-דיאטנית ממשרד הבריאות" },
  { image: certUniversity, alt: "תואר B.Sc.Nutr במדעי התזונה - האוניברסיטה העברית" },
  { image: certGroups, alt: "תעודת מיומנויות בהנחיית קבוצות" },
  { image: certEatingDisorders, alt: "תעודת הפרעות אכילה במעגל החיים" },
];

const CredentialsSection = () => (
  <section id="about" className="py-20 md:py-28 bg-muted">
    <div className="container mx-auto px-6">
      {/* About me */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-10"
      >
        מי אני
      </motion.h2>

      {/* Side-by-side: text + photo — always row on all screens */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className="max-w-4xl mx-auto mb-16 flex items-center gap-5 md:gap-10"
        style={{ flexDirection: "row", flexWrap: "nowrap" }}
      >
        {/* Text — right side (RTL) */}
        <div className="flex-1 min-w-0 text-right">
          <p className="text-muted-foreground font-body text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            אני כליל דורי, תזונאית קלינית, בוגרת תואר ראשון B.Sc בתזונה קלינית מהאוניברסיטה העברית, עם כ- 8 שנות ניסיון בליווי אנשים לשיפור הבריאות והטמעת אורח חיים מיטבי. אני מלווה נשים וגברים בתהליכי ירידה במשקל, איזון מטבולי ושינוי הרגלים, תוך הסתכלות רחבה שמחברת בין הגוף, התזונה והעולם הרגשי. בעבודתי אני משלבת כלים מעולמות התזונה הקלינית, ה- Longevity וההתנהגות, במטרה לייצר תהליך מדויק ופרקטי, שיחזיק לאורך זמן.
          </p>
          <p className="text-muted-foreground font-body text-sm sm:text-base md:text-lg leading-relaxed">
            לאורך השנים ליוויתי מאות אנשים בתהליכים עמוקים של שינוי, ונוכחתי להבין שהתוצאה האמיתית לא מגיעה מדיאטה, אלא מהבנה, הקשבה והתאמה אישית. לכן, אני שמה דגש משמעותי גם על ההיבטים הרגשיים וההתנהגותיים של האכילה, במיוחד בעבודה עם הפרעות אכילה ודפוסים מורכבים סביב אוכל. אני מאמינה שתזונה נכונה היא לא מגבלה, אלא כלי עוצמתי ליצירת גוף מאוזן, בריא וחזק, כזה שאפשר להתמיד בו ולהרגיש טוב באמת.
          </p>
        </div>

        {/* Photo — left side, always visible side-by-side */}
        <div className="shrink-0">
          <img
            src={aboutMePhoto}
            alt="כליל דורי - תזונאית קלינית"
            className="w-[100px] sm:w-[140px] md:w-52 lg:w-60 rounded-2xl object-cover shadow-lg"
            style={{ aspectRatio: "3/4" }}
          />
        </div>
      </motion.div>

      {/* Certificates */}
      <motion.h3
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="font-display text-xl md:text-2xl font-bold text-foreground text-center mb-10"
      >
        הסמכות מקצועיות
      </motion.h3>

      <div className="max-w-xl mx-auto grid grid-cols-2 gap-5">
        {certs.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="rounded-xl border-2 border-border bg-background shadow-sm overflow-hidden p-2"
          >
            <img
              src={cert.image}
              alt={cert.alt}
              className="w-full max-w-[200px] mx-auto h-auto object-contain rounded-lg"
              loading="lazy"
            />
            <p className="text-center font-body text-[11px] text-muted-foreground mt-2 leading-tight">{cert.alt}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CredentialsSection;
