import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, ChevronDown } from "lucide-react";
import recipeBook from "@/assets/recipe-cover-new.png";
import cardsCoverNew from "@/assets/cards-cover-new.png";
import cardSlide2 from "@/assets/card-slide-2.png";
import cardSlide3 from "@/assets/card-slide-3.png";

const cardExamples = [cardsCoverNew, cardSlide2, cardSlide3];

const recipeParas = [
  "חוברת מתכונים דיגיטלית שנבנתה במיוחד עבור אנשים עם רגישות לגלוטן וללקטוז, וגם עבור מי שמסתובב יום יום עם נפיחות, גזים או יציאות לא סדירות ולא מצליח להבין למה.",
  "החוברת כוללת מגוון מתכונים קלים להכנה, המבוססים על חומרי גלם איכותיים וידידותיים למערכת העיכול, ללא גלוטן, דל לקטוז, ללא סוכר וללא ממתיקים מלאכותיים, כך שתוכלו ליהנות מאוכל טעים, מזין ומשביע מבלי להכביד על הגוף.",
  "מעבר לרעיונות לארוחות יומיומיות, החוברת מאפשרת לבצע סוג של ריסט תזונתי לגוף, להפחית עומס ממערכת העיכול, להרגיע את הבטן ולהתחיל להרגיש קלילים יותר. זו דרך פשוטה להתחיל לאכול בצורה שמיטיבה עם הגוף, תומכת בהרגעת מערכת העיכול ומסייעת להפחית נפיחות ואי נוחות, תוך שמירה על תזונה מגוונת, טעימה ומאוזנת ביומיום. 🥗✨",
];

const cardsParas = [
  "סט קלפים שנוצר במיוחד עבור נשים המתמודדות עם מערכת יחסים מורכבת עם אוכל, מחשבות סביב אכילה, או תחושות של אשמה ושליטה. הקלפים נועדו להעניק רגע של עצירה, התבוננות וחיזוק פנימי בתוך היום יום.",
  "כל קלף כולל מסר מעודד, נקודת מבט חדשה או שאלה להתבוננות, המסייעים להתחבר מחדש לגוף, לרגשות ולצרכים האמיתיים. השימוש בקלפים מאפשר ליצור מרחב קטן של מודעות וחמלה עצמית, שמזכיר שאפשר לפתח מערכת יחסים רגועה ומיטיבה יותר עם אוכל.",
  "הקלפים יכולים לשמש ככלי אישי לרגעי התבוננות במהלך היום, כחלק מתהליך אישי, או ככלי תומך בתוך תהליך טיפולי. הם מזמינים לעצור לרגע, לנשום, ולהיזכר שהדרך לשינוי מתחילה ביחס עדין יותר כלפי עצמך 🩷",
];

const recipeWAMsg = encodeURIComponent("שלום, אני מעוניינ.ת לשמוע עוד פרטים על חוברת המתכונים");
const cardsWAMsg = encodeURIComponent("שלום, אני מעוניינ.ת לשמוע עוד פרטים על קלפי החיזוק");
const recipeWALink = `https://wa.me/972559272658?text=${recipeWAMsg}`;
const cardsWALink = `https://wa.me/972559272658?text=${cardsWAMsg}`;

const ProductsSection = () => {
  const [cardSlide, setCardSlide] = useState(0);
  const [recipeExpanded, setRecipeExpanded] = useState(false);
  const [cardsExpanded, setCardsExpanded] = useState(false);

  const goCard = (dir: number) =>
    setCardSlide((p) => (p + dir + cardExamples.length) % cardExamples.length);

  return (
    <section id="products" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-16"
        >
          מוצרים
        </motion.h2>

        {/* Product A: Recipe Book */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="rounded-3xl bg-muted shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
              <div className="w-full md:w-2/5 flex justify-center shrink-0">
                <img
                  src={recipeBook}
                  alt="אתחול לבטן - חוברת מתכונים"
                  className="w-full max-w-[240px] md:max-w-[260px] h-auto object-contain rounded-2xl"
                />
              </div>
              <div className="flex-1 text-right">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">אתחול לבטן</h3>
                <p className="text-muted-foreground font-body text-sm mb-4">ספר המתכונים הדיגיטלי למערכת עיכול רגועה</p>

                <AnimatePresence>
                  {recipeExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      {recipeParas.map((p, i) => (
                        <p key={i} className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                          {p}
                        </p>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  onClick={() => setRecipeExpanded(!recipeExpanded)}
                  className="flex items-center gap-1 text-primary font-display font-semibold text-sm mb-5 hover:underline"
                >
                  {recipeExpanded ? "הסתר" : "לפרטים נוספים"}
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${recipeExpanded ? "rotate-180" : ""}`} />
                </button>

                <div className="flex items-baseline gap-3 mb-5">
                  <span className="font-display text-2xl font-bold text-primary">79 ש״ח</span>
                  <span className="text-sm text-muted-foreground font-body">מחיר השקה</span>
                  <span className="text-sm text-muted-foreground line-through font-body">120 ש״ח</span>
                </div>

                <motion.a
                  href={recipeWALink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded-full bg-secondary text-secondary-foreground px-7 py-3 text-sm font-display font-bold shadow-md hover:shadow-lg transition-shadow"
                >
                  {/* WhatsApp icon */}
                  <svg viewBox="0 0 32 32" className="h-4 w-4 fill-white">
                    <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.924 15.924 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.312 22.594c-.39 1.1-1.932 2.014-3.178 2.28-.854.18-1.968.324-5.72-1.23-4.804-1.988-7.896-6.862-8.136-7.18-.23-.318-1.938-2.58-1.938-4.922s1.228-3.49 1.664-3.97c.436-.48.952-.6 1.27-.6.318 0 .634.002.912.016.292.014.684-.112 1.07.816.39.94 1.326 3.236 1.442 3.47.116.234.194.508.04.816-.156.318-.234.514-.468.794-.234.278-.49.622-.702.834-.234.234-.478.49-.206.96.272.468 1.212 2 2.602 3.238 1.786 1.592 3.292 2.084 3.76 2.318.468.234.742.196 1.014-.118.272-.318 1.172-1.366 1.484-1.836.312-.468.624-.39 1.054-.234.43.156 2.724 1.284 3.192 1.518.468.234.78.352.896.546.116.196.116 1.12-.274 2.204z"/>
                  </svg>
                  לרכישה
                </motion.a>
              </div>
            </div>
            <div className="bg-primary/10 border-t border-primary/15 px-8 py-5 text-center">
              <p className="font-display text-lg md:text-xl font-bold text-primary">
                מי שרוכש תוכנית ליווי מקבל את החוברת מתכונים בחינם!
              </p>
            </div>
          </div>
        </motion.div>

        {/* Product B: Empowerment Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-3xl bg-muted shadow-lg overflow-hidden p-8 md:p-12">
            <div className="text-right mb-6">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">קלפי חיזוק</h3>
              <p className="text-muted-foreground font-body text-sm mb-4">ליצירת קשר רגוע ובריא יותר עם אוכל</p>

              <AnimatePresence>
                {cardsExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    {cardsParas.map((p, i) => (
                      <p key={i} className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                        {p}
                      </p>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={() => setCardsExpanded(!cardsExpanded)}
                className="flex items-center gap-1 text-primary font-display font-semibold text-sm mb-5 hover:underline"
              >
                {cardsExpanded ? "הסתר" : "לפרטים נוספים"}
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${cardsExpanded ? "rotate-180" : ""}`} />
              </button>

              <div className="flex items-baseline gap-3 mb-5">
                <span className="font-display text-2xl font-bold text-primary">119 ש״ח</span>
                <span className="text-sm text-muted-foreground font-body">מחיר השקה</span>
                <span className="text-sm text-muted-foreground line-through font-body">149 ש״ח</span>
              </div>

              <motion.a
                href={cardsWALink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full bg-secondary text-secondary-foreground px-7 py-3 text-sm font-display font-bold shadow-md hover:shadow-lg transition-shadow"
              >
                <svg viewBox="0 0 32 32" className="h-4 w-4 fill-white">
                  <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.924 15.924 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.312 22.594c-.39 1.1-1.932 2.014-3.178 2.28-.854.18-1.968.324-5.72-1.23-4.804-1.988-7.896-6.862-8.136-7.18-.23-.318-1.938-2.58-1.938-4.922s1.228-3.49 1.664-3.97c.436-.48.952-.6 1.27-.6.318 0 .634.002.912.016.292.014.684-.112 1.07.816.39.94 1.326 3.236 1.442 3.47.116.234.194.508.04.816-.156.318-.234.514-.468.794-.234.278-.49.622-.702.834-.234.234-.478.49-.206.96.272.468 1.212 2 2.602 3.238 1.786 1.592 3.292 2.084 3.76 2.318.468.234.742.196 1.014-.118.272-.318 1.172-1.366 1.484-1.836.312-.468.624-.39 1.054-.234.43.156 2.724 1.284 3.192 1.518.468.234.78.352.896.546.116.196.116 1.12-.274 2.204z"/>
                </svg>
                לרכישה
              </motion.a>
            </div>

            {/* Image slider — strictly BELOW text */}
            <div className="relative max-w-xs mx-auto mt-4">
              <button
                onClick={() => goCard(-1)}
                className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-10 w-9 h-9 rounded-full bg-background shadow-md flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors active:scale-95"
                aria-label="הקודם"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => goCard(1)}
                className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-10 w-9 h-9 rounded-full bg-background shadow-md flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors active:scale-95"
                aria-label="הבא"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <AnimatePresence mode="wait">
                <motion.img
                  key={cardSlide}
                  src={cardExamples[cardSlide]}
                  alt={`דוגמה לקלף ${cardSlide + 1}`}
                  className="w-full h-64 md:h-80 object-contain rounded-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>
              <div className="flex justify-center gap-2 mt-4">
                {cardExamples.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCardSlide(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${i === cardSlide ? "bg-primary w-5" : "bg-muted-foreground/30 w-2"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
