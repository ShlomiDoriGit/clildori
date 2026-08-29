import { motion } from "framer-motion";
import { Award, BadgeCheck, Users, HeartHandshake, Infinity as InfinityIcon } from "lucide-react";
import aboutMePhoto from "@/assets/about-me-2027.jpg";
import certDietitian from "@/assets/cert-dietitian.jpeg";
import certUniversity from "@/assets/cert-university.jpeg";
import certGroups from "@/assets/cert-groups.jpeg";
import certEatingDisorders from "@/assets/cert-eating-disorders.jpeg";

const highlights = [
  { icon: BadgeCheck, title: "תזונאית קלינית מוסמכת", sub: "B.Sc בתזונה קלינית" },
  { icon: Users, title: "9 שנות ניסיון", sub: "בליווי תהליכי תזונה ושינוי הרגלים" },
  { icon: HeartHandshake, title: "גישה שלמה", sub: "חיבור בין גוף, נפש ושגרה" },
  { icon: InfinityIcon, title: "יציבות והמשכיות", sub: "תהליך שמחזיק לאורך זמן" },
];

const certs = [
  { image: certDietitian, alt: "תעודת תזונאית-דיאטנית ממשרד הבריאות" },
  { image: certUniversity, alt: "תואר B.Sc.Nutr במדעי התזונה - האוניברסיטה העברית" },
  { image: certGroups, alt: "תעודת מיומנויות בהנחיית קבוצות" },
  { image: certEatingDisorders, alt: "תעודת הפרעות אכילה במעגל החיים" },
];

const CredentialsSection = () => (
  <section id="about" className="section-padding bg-white relative overflow-hidden">
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

      {/* Card: On mobile — image on top, text below. On desktop — side by side */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="max-w-5xl mx-auto mb-20 bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10"
      >
        {/* Desktop: side by side. Mobile: image floats with text */}
        <div className="hidden md:flex flex-row items-stretch gap-8 lg:gap-12">
          <div className="shrink-0 order-last w-[340px] lg:w-[420px]">
            <img
              src={aboutMePhoto}
              alt="כליל דורי - תזונאית קלינית"
              className="w-full h-full rounded-3xl object-cover shadow-2xl"
            />
          </div>
          <div className="flex-1 min-w-0 text-right">
            <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed mb-4">
              אני כליל דורי, תזונאית קלינית, בוגרת תואר ראשון B.Sc בתזונה קלינית מהאוניברסיטה העברית, עם כ- 9 שנות ניסיון בליווי מאות נשים וגברים בתהליכי ירידה במשקל, איזון מטבולי ושיפור אורח החיים, תוך התייחסות להיבטים הרגשיים וההתנהגותיים שמעצבים את דפוסי האכילה.
            </p>
            <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed mb-4">
              הגישה שלי מבוססת על הסתכלות רחבה על האדם שמולי, הרבה מעבר לתפריט, קלוריות או משקל. בתהליך אני מתייחסת לגוף, לבדיקות הדם, להרגלים, לסדר היום, לרמות הסטרס, לשינה, לחשקים, לאכילה הרגשית ולחוויה הפנימית סביב אוכל. מתוך ההבנה הזו אני בונה תוכנית שמשלבת ידע מעולמות התזונה קלינית, Longevity, שינוי הרגלים ועבודה מעמיקה עם דפוסי אכילה, על מנת לבנות תהליך מדויק, אישי וישים באמת.
            </p>
            <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed mb-4">
              המטרה שלי היא ליצור ליווי שלא נשען על דיאטה זמנית או כללים נוקשים, אלא על התאמה אמיתית לאורח החיים, לצרכים, למטרות ולמערכת היחסים של כל אדם עם הגוף ועם האוכל. לכן, לצד בניית תוכנית תזונתית מקצועית, אני שמה דגש משמעותי גם על ההיבטים הרגשיים וההתנהגותיים של האכילה, במיוחד בעבודה עם הפרעות אכילה ודפוסים מורכבים סביב אוכל.
            </p>
            <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed">
              אני מאמינה שתזונה נכונה היא לא מגבלה, אלא כלי עוצמתי ליצירת גוף מאוזן, בריא וחזק, מתוך תהליך שאפשר להתמיד בו לאורך זמן, להרגיש בו טוב באמת, ולבנות דרכו חיים בריאים, חופשיים ומאוזנים יותר.
            </p>
          </div>
        </div>

        {/* Mobile only: image on top, text below */}
        <div className="md:hidden flex flex-col items-center">
          <img
            src={aboutMePhoto}
            alt="כליל דורי - תזונאית קלינית"
            className="w-[280px] sm:w-[340px] rounded-3xl object-cover shadow-2xl mb-6"
            style={{ aspectRatio: "3/4" }}
          />
          <div className="text-right w-full">
            <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
              אני כליל דורי, תזונאית קלינית, בוגרת תואר ראשון B.Sc בתזונה קלינית מהאוניברסיטה העברית, עם כ- 9 שנות ניסיון בליווי מאות נשים וגברים בתהליכי ירידה במשקל, איזון מטבולי ושיפור אורח החיים, תוך התייחסות להיבטים הרגשיים וההתנהגותיים שמעצבים את דפוסי האכילה.
            </p>
            <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
              הגישה שלי מבוססת על הסתכלות רחבה על האדם שמולי, הרבה מעבר לתפריט, קלוריות או משקל. בתהליך אני מתייחסת לגוף, לבדיקות הדם, להרגלים, לסדר היום, לרמות הסטרס, לשינה, לחשקים, לאכילה הרגשית ולחוויה הפנימית סביב אוכל. מתוך ההבנה הזו אני בונה תוכנית שמשלבת ידע מעולמות התזונה קלינית, Longevity, שינוי הרגלים ועבודה מעמיקה עם דפוסי אכילה, על מנת לבנות תהליך מדויק, אישי וישים באמת.
            </p>
            <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
              המטרה שלי היא ליצור ליווי שלא נשען על דיאטה זמנית או כללים נוקשים, אלא על התאמה אמיתית לאורח החיים, לצרכים, למטרות ולמערכת היחסים של כל אדם עם הגוף ועם האוכל. לכן, לצד בניית תוכנית תזונתית מקצועית, אני שמה דגש משמעותי גם על ההיבטים הרגשיים וההתנהגותיים של האכילה, במיוחד בעבודה עם הפרעות אכילה ודפוסים מורכבים סביב אוכל.
            </p>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              אני מאמינה שתזונה נכונה היא לא מגבלה, אלא כלי עוצמתי ליצירת גוף מאוזן, בריא וחזק, מתוך תהליך שאפשר להתמיד בו לאורך זמן, להרגיש בו טוב באמת, ולבנות דרכו חיים בריאים, חופשיים ומאוזנים יותר.
            </p>
          </div>
        </div>

        {/* Credential strip */}
        <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-2 md:divide-x md:divide-x-reverse md:divide-gray-100">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex flex-col items-center text-center px-2">
                <Icon className="h-7 w-7 text-primary mb-2" strokeWidth={1.5} />
                <span className="font-display text-[13px] md:text-sm font-bold text-foreground leading-tight min-h-[2.4rem] lg:min-h-0 flex items-center justify-center">
                  {item.title}
                </span>
                <span className="font-body text-xs text-muted-foreground leading-tight mt-0.5">
                  {item.sub}
                </span>
              </div>
            );
          })}
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
        <div className="inline-flex items-center gap-3 mb-3">
          <Award className="h-8 w-8 md:h-11 md:w-11 text-primary" />
          <h3 className="font-display text-3xl md:text-5xl font-bold text-foreground">
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
