import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Stethoscope,
  ClipboardList,
  Pill,
  HeartHandshake,
  Wrench,
  HeartPulse,
  CalendarClock,
  Salad,
  Users,
  Heart,
  ChevronDown,
} from "lucide-react";

const tracks = [
  {
    id: "lifestyle",
    label: "אורח חיים בריא",
    points: [
      { title: "פגישות ייעוץ והערכה תזונתית", details: "סדרת פגישות אישיות בקליניקה, הכוללות הערכה תזונתית מעמיקה ובניית תהליך מקצועי המותאם לך.", icon: Stethoscope, num: "1" },
      { title: "תפריט תזונתי מותאם אישית", details: "בניית תפריט תזונתי בהתאם למצב הבריאותי, בדיקות הדם, ההעדפות האישיות ואורח החיים שלך.", icon: ClipboardList, num: "2" },
      { title: "פרוטוקול תוספי תזונה", details: "התאמת פרוטוקול תוספי תזונה המבוסס על המטרות האישיות, בדיקות הדם והספרות המקצועית העדכנית.", icon: Pill, num: "3" },
      { title: "ליווי ותמיכה שוטפת", details: "ליווי רציף בין המפגשים, הכולל מעקב אחר ההתקדמות, מענה לשאלות, תמיכה והתאמות לפי הצורך.", icon: HeartHandshake, num: "4" },
      { title: "כלים לשינוי הרגלים", details: "מתן כלים פרקטיים לשינוי הרגלים, ויסות אכילה, ניהול סטרס ושמירה על התוצאות לאורך זמן.", icon: Wrench, num: "5" },
    ],
  },
  {
    id: "eating-disorders",
    label: "הפרעות אכילה",
    points: [
      { title: "הערכה תזונתית רגישה ומעמיקה", details: "היכרות עם דפוסי האכילה, הקשר עם הגוף והאוכל, ההיסטוריה הבריאותית, בדיקות הדם, התסמינים והצרכים הרגשיים סביב האכילה.", icon: HeartPulse, num: "1" },
      { title: "פגישות שבועיות ותהליך הדרגתי", details: "ליווי תזונתי רציף הכולל פגישות שבועיות, המאפשר בניית יציבות והתקדמות הדרגתית בקצב מותאם ובטוח.", icon: CalendarClock, num: "2" },
      { title: "מסגרת אכילה מותאמת", details: "בניית סדר אכילה הדרגתי ומותאם אישית, הכולל תכנון ארוחות, הרחבת מגוון המזונות והפחתת דפוסים שמייצרים קושי סביב האכילה.", icon: Salad, num: "3" },
      { title: "עבודה בצוות רב מקצועי", details: "במידת הצורך, התהליך מתקיים בשיתוף פעולה עם מטפל רגשי, פסיכיאטר, רופא משפחה וגורמי טיפול נוספים, כחלק ממעטפת טיפולית מקצועית ובטוחה.", icon: Users, num: "4" },
      { title: "קשר עם הגוף והאכילה", details: "עבודה על זיהוי רעב ושובע, אכילה קשובה, תחושת מסוגלות, הפחתת אשמה סביב אוכל, ובנייה מחודשת של אמון בגוף.", icon: Heart, num: "5" },
    ],
  },
];

const ProgramSection = () => {
  const [activeTrack, setActiveTrack] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const points = tracks[activeTrack].points;

  const selectTrack = (i: number) => {
    setActiveTrack(i);
    setOpenIndex(null);
  };

  return (
    <section id="program" className="section-padding bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block font-body text-sm font-semibold text-primary bg-primary/10 rounded-full px-4 py-1.5 mb-4">
            ליווי תזונתי
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5">
            התהליך בקליניקה
          </h2>
          <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            בקליניקה קיימים שני מסלולי ליווי ייעודיים, המאפשרים להתאים את התהליך
            <br className="hidden md:inline" />
            {" "}למצב הבריאותי, לדפוסי האכילה ולמטרות האישיות שלך.
            <br className="hidden md:inline" />
            {" "}אפשר לבחור את המסלול המתאים ולהכיר את שלבי התהליך:
          </p>
        </motion.div>

        {/* Track toggle */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex gap-1.5 p-1.5 rounded-full bg-purple-50 border border-purple-100 shadow-sm">
            {tracks.map((track, i) => (
              <button
                key={track.id}
                onClick={() => selectTrack(i)}
                className={`font-display text-sm md:text-base font-bold rounded-full px-5 md:px-7 py-2.5 transition-all duration-300 ${
                  activeTrack === i
                    ? "bg-gradient-purple text-white shadow-md"
                    : "text-primary hover:bg-white"
                }`}
              >
                {track.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Elegant cards — Mobile: vertical list, Desktop: 5 columns */}
        <div className="max-w-5xl mx-auto">

          {/* Desktop: 5-column horizontal */}
          <div className="hidden md:grid md:grid-cols-5 gap-5 mb-4">
            {points.map((point, i) => {
              const Icon = point.icon;
              return (
                <motion.button
                  key={`${activeTrack}-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(94, 23, 235, 0.12)" }}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className={`group flex flex-col items-center text-center p-6 rounded-3xl border-2 transition-all duration-300 cursor-pointer relative overflow-hidden ${
                    openIndex === i
                      ? "border-primary bg-white shadow-xl"
                      : "border-gray-100 bg-white hover:border-primary/30 shadow-md"
                  }`}
                >
                  {/* Number badge */}
                  <span className={`absolute top-3 left-3 font-display text-[10px] font-bold rounded-full w-6 h-6 flex items-center justify-center transition-colors ${
                    openIndex === i ? "bg-primary text-white" : "bg-gray-100 text-gray-400"
                  }`}>
                    {point.num}
                  </span>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ${
                    openIndex === i
                      ? "bg-gradient-purple text-white shadow-lg shadow-primary/25"
                      : "bg-purple-50 text-primary group-hover:bg-purple-100"
                  }`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="font-display text-sm font-bold text-foreground leading-tight mb-1">
                    {point.title}
                  </span>
                  <ChevronDown className={`h-4 w-4 text-primary/50 mt-2 transition-transform duration-300 ${openIndex === i ? "rotate-180 text-primary" : ""}`} />
                </motion.button>
              );
            })}
          </div>

          {/* Mobile: Elegant stacked cards */}
          <div className="md:hidden space-y-3 mb-4">
            {points.map((point, i) => {
              const Icon = point.icon;
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={`${activeTrack}-${i}`}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-300 text-right ${
                      isOpen
                        ? "border-primary bg-white shadow-lg"
                        : "border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-primary/20"
                    }`}
                  >
                    {/* Number + Icon */}
                    <div className="flex items-center gap-3 shrink-0">
                      <span className={`font-display text-2xl font-extrabold transition-colors ${
                        isOpen ? "text-primary" : "text-gray-200"
                      }`}>
                        {point.num}
                      </span>
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-gradient-purple text-white shadow-md shadow-primary/20"
                          : "bg-purple-50 text-primary"
                      }`}>
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    {/* Title */}
                    <span className="flex-1 font-display text-sm font-bold text-foreground leading-tight">
                      {point.title}
                    </span>

                    {/* Chevron */}
                    <ChevronDown className={`h-5 w-5 text-primary/40 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""}`} />
                  </button>

                  {/* Expandable detail */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="bg-purple-50/50 rounded-xl p-4 mt-2 mr-[76px]">
                          <p className="text-muted-foreground font-body text-sm leading-relaxed">
                            {point.details}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Desktop expanded detail */}
          <div className="hidden md:block">
            <AnimatePresence>
              {openIndex !== null && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden max-w-3xl mx-auto"
                >
                  <div className="bg-purple-50/50 rounded-2xl p-6 text-center mb-6 border border-purple-100">
                    <p className="text-muted-foreground font-body text-base leading-relaxed">
                      {points[openIndex].details}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

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
