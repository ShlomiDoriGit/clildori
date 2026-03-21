import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, ChevronDown } from "lucide-react";
import recipeBook from "@/assets/recipe-cover.png";
import cardExample1 from "@/assets/card-example-1.jpg";
import cardExample2 from "@/assets/card-example-2.jpg";
import cardExample3 from "@/assets/card-example-3.jpg";

const cardExamples = [cardExample1, cardExample2, cardExample3];

const recipeFullText = `המוצר "אתחול לבטן" - ספר המתכונים הדיגיטלי למערכת עיכול רגועה ללא גלוטן, דל לקטוז, ללא סוכר וללא ממתיקים מלאכותיים. חוברת מתכונים דיגיטלית שנבנתה במיוחד עבור אנשים עם רגישות לגלוטן וללקטוז, וגם עבור מי שמסתובב יום יום עם נפיחות, גזים או יציאות לא סדירות ולא מצליח להבין למה. החוברת כוללת מגוון מתכונים קלים להכנה, המבוססים על חומרי גלם איכותיים וידידותיים למערכת העיכול, ללא גלוטן, דל לקטוז, ללא סוכר וללא ממתיקים מלאכותיים, כך שתוכלו ליהנות מאוכל טעים, מזין ומשביע מבלי להכביד על הגוף. מעבר לרעיונות לארוחות יומיומיות, החוברת מאפשרת לבצע סוג של ריסט תזונתי לגוף, להפחית עומס ממערכת העיכול, להרגיע את הבטן ולהתחיל להרגיש קלילים יותר. זו דרך פשוטה להתחיל לאכול בצורה שמיטיבה עם הגוף, תומכת בהרגעת מערכת העיכול ומסייעת להפחית נפיחות ואי נוחות, תוך שמירה על תזונה מגוונת, טעימה ומאוזנת ביומיום. 🥗✨`;

const cardsFullText = `קלפי חיזוק - ליצירת קשר רגוע ובריא יותר עם אוכל: סט קלפים שנוצר במיוחד עבור נשים המתמודדות עם מערכת יחסים מורכבת עם אוכל, מחשבות סביב אכילה, או תחושות של אשמה ושליטה. הקלפים נועדו להעניק רגע של עצירה, התבוננות וחיזוק פנימי בתוך היום יום. כל קלף כולל מסר מעודד, נקודת מבט חדשה או שאלה להתבוננות, המסייעים להתחבר מחדש לגוף, לרגשות ולצרכים האמיתיים. השימוש בקלפים מאפשר ליצור מרחב קטן של מודעות וחמלה עצמית, שמזכיר שאפשר לפתח מערכת יחסים רגועה ומיטיבה יותר עם אוכל. הקלפים יכולים לשמש ככלי אישי לרגעי התבוננות במהלך היום, כחלק מתהליך אישי, או ככלי תומך בתוך תהליך טיפולי. הם מזמינים לעצור לרגע, לנשום, ולהיזכר שהדרך לשינוי מתחילה ביחס עדין יותר כלפי עצמך 🩷`;

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
          מוצרים ושירותים
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
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-muted-foreground font-body text-sm leading-relaxed mb-4 overflow-hidden"
                    >
                      {recipeFullText}
                    </motion.p>
                  )}
                </AnimatePresence>

                <button
                  onClick={() => setRecipeExpanded(!recipeExpanded)}
                  className="flex items-center gap-1 text-primary font-display font-semibold text-sm mb-5 hover:underline"
                >
                  {recipeExpanded ? "הסתר" : "לפרטים נוספים"}
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${recipeExpanded ? "rotate-180" : ""}`} />
                </button>

                <div className="flex items-baseline gap-3 mb-4">
                  <span className="font-display text-2xl font-bold text-primary">79 ש״ח</span>
                  <span className="text-sm text-muted-foreground font-body">מחיר השקה</span>
                  <span className="text-sm text-muted-foreground line-through font-body">120 ש״ח</span>
                </div>
              </div>
            </div>
            <div className="bg-primary/10 border-t border-primary/15 px-8 py-5 text-center">
              <p className="font-display text-lg md:text-xl font-bold text-primary">
                מי שרוכש תוכנית ליווי מקבל את החוברת מתכונים בחינם!
              </p>
            </div>
          </div>
        </motion.div>

        {/* Product B: Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-3xl bg-muted shadow-lg overflow-hidden p-8 md:p-12">
            <div className="text-right mb-8">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">קלפי חיזוק</h3>
              <p className="text-muted-foreground font-body text-sm mb-4">ליצירת קשר רגוע ובריא יותר עם אוכל</p>

              <AnimatePresence>
                {cardsExpanded && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-muted-foreground font-body text-sm leading-relaxed mb-4 overflow-hidden"
                  >
                    {cardsFullText}
                  </motion.p>
                )}
              </AnimatePresence>

              <button
                onClick={() => setCardsExpanded(!cardsExpanded)}
                className="flex items-center gap-1 text-primary font-display font-semibold text-sm mb-5 hover:underline"
              >
                {cardsExpanded ? "הסתר" : "לפרטים נוספים"}
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${cardsExpanded ? "rotate-180" : ""}`} />
              </button>

              <div className="flex items-baseline gap-3">
                <span className="font-display text-2xl font-bold text-primary">119 ש״ח</span>
                <span className="text-sm text-muted-foreground font-body">מחיר השקה</span>
                <span className="text-sm text-muted-foreground line-through font-body">149 ש״ח</span>
              </div>
            </div>

            {/* Card slider */}
            <div className="relative max-w-xs mx-auto">
              <button onClick={() => goCard(-1)} className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-10 w-9 h-9 rounded-full bg-background shadow-md flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors active:scale-95" aria-label="הקודם">
                <ChevronRight className="h-4 w-4" />
              </button>
              <button onClick={() => goCard(1)} className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-10 w-9 h-9 rounded-full bg-background shadow-md flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors active:scale-95" aria-label="הבא">
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
                  <button key={i} onClick={() => setCardSlide(i)} className={`h-2 rounded-full transition-all duration-300 ${i === cardSlide ? "bg-primary w-5" : "bg-muted-foreground/30 w-2"}`} />
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
