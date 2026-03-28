import { motion } from "framer-motion";
import { Award } from "lucide-react";
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
  <section id="about" className="section-padding bg-muted relative overflow-hidden">
    {/* Decorative blob */}
    <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

    <div className="container mx-auto px-6 md:px-8 relative z-10">
      {/* About me */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="inline-block font-body text-sm font-semibold text-primary bg-primary/10 rounded-full px-4 py-1.5 mb-4">
          הכירו אותי
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
          מי אני
        </h2>
      </motion.div>

      {/* Card with side-by-side: text + photo — always row on all screens */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="max-w-5xl mx-auto mb-20 bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10 flex items-center gap-5 md:gap-10"
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
            className="w-[90px] sm:w-[130px] md:w-48 lg:w-56 rounded-2xl object-cover shadow-lg ring-4 ring-purple-100"
            style={{ aspectRatio: "3/4" }}
          />
        </div>
      </motion.div>

      {/* Certificates */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center mb-10"
      >
        <div className="inline-flex items-center gap-2 mb-3">
          <Award className="h-6 w-6 text-primary" />
          <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
            הסמכות מקצועיות
          </h3>
        </div>
      </motion.div>

      <div className="max-w-2xl mx-auto grid grid-cols-2 gap-5">
        {certs.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(0,0,0,0.1)" }}
            className="rounded-2xl bg-white border border-gray-100 shadow-md overflow-hidden p-3 transition-all duration-300"
          >
            <img
              src={cert.image}
              alt={cert.alt}
              className="w-full max-w-[220px] mx-auto h-auto object-contain rounded-xl"
              loading="lazy"
            />
            <p className="text-center font-body text-[11px] text-muted-foreground mt-2.5 leading-tight px-2">{cert.alt}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CredentialsSection;
