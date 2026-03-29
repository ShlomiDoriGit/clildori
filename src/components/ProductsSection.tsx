import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, ChevronDown, ShoppingBag } from "lucide-react";
import recipeBook from "@/assets/recipe-book.png";
import cardsCoverNew from "@/assets/cards-cover-new.png";
import cardSlide13 from "@/assets/card-slide-13.png";
import cardSlide17 from "@/assets/card-slide-17.png";

const cardExamples = [cardsCoverNew, cardSlide13, cardSlide17];

const recipeParas = [
  'חוברת מתכונים דיגיטלית שנבנתה במיוחד עבור אנשים עם רגישות לגלוטן וללקטוז, וגם עבור מי שמסתובב יום יום עם נפיחות, גזים או יציאות לא סדירות ולא מצליח להבין למה.',
  'החוברת כוללת מגוון מתכונים קלים להכנה, המבוססים על חומרי גלם איכותיים וידידותיים למערכת העיכול, ללא גלוטן, דל לקטוז, ללא סוכר וללא ממתיקים מלאכותיים, כך שתוכלו ליהנות מאוכל טעים, מזין ומשביע מבלי להכביד על הגוף.',
  'מעבר לרעיונות לארוחות יומיומיות, החוברת מאפשרת לבצע סוג של ריסט תזונתי לגוף, להפחית עומס ממערכת העיכול, להרגיע את הבטן ולהתחיל להרגיש קלילים יותר. זו דרך פשוטה להתחיל לאכול בצורה שמיטיבה עם הגוף, תומכת בהרגעת מערכת העיכול ומסייעת להפחית נפיחות ואי נוחות, תוך שמירה על תזונה מגוונת, טעימה ומאוזנת ביומיום. 🥗✨',
];

const cardsParas = [
  'סט קלפים שנוצר במיוחד עבור נשים המתמודדות עם מערכת יחסים מורכבת עם אוכל, מחשבות סביב אכילה, או תחושות של אשמה ושליטה. הקלפים נועדו להעניק רגע של עצירה, התבוננות וחיזוק פנימי בתוך היום יום.',
  'כל קלף כולל מסר מעודד, נקודת מבט חדשה או שאלה להתבוננות, המסייעים להתחבר מחדש לגוף, לרגשות ולצרכים האמיתיים. השימוש בקלפים מאפשר ליצור מרחב קטן של מודעות וחמלה עצמית, שמזכיר שאפשר לפתח מערכת יחסים רגועה ומיטיבה יותר עם אוכל.',
  'הקלפים יכולים לשמש ככלי אישי לרגעי התבוננות במהלך היום, כחלק מתהליך אישי, או ככלי תומך בתוך תהליך טיפולי. הם מזמינים לעצור לרגע, לנשום, ולהיזכר שהדרך לשינוי מתחילה ביחס עדין יותר כלפי עצמך 🩷',
];

const ProductsSection = () => {
  const [cardSlide, setCardSlide] = useState(0);
  const [recipeExpanded, setRecipeExpanded] = useState(false);
  const [cardsExpanded, setCardsExpanded] = useState(false);

  const goCard = (dir: number) =>
    setCardSlide((p) => (p + dir + cardExamples.length) % cardExamples.length);

  return (
    <section id="products" className="section-padding bg-white relative">
      <div className="container mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-body text-sm font-semibold text-primary bg-primary/10 rounded-full px-4 py-1.5 mb-4">
            <ShoppingBag className="inline h-4 w-4 ml-1 -mt-0.5" />
            חנות
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            מוצרים
          </h2>
        </motion.div>

        {/* Products Grid — side by side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {/* Product A: Recipe Book */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-3xl bg-muted border border-gray-100 shadow-lg overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
              <div className="p-6 md:p-8 flex-1">
                <div className="flex justify-center mb-6">
                  <motion.img
                    whileHover={{ scale: 1.03, rotate: 1 }}
                    transition={{ duration: 0.3 }}
                    src={recipeBook}
                    alt="אתחול לבטן - חוברת מתכונים"
                    className="w-full max-w-[200px] h-auto object-contain rounded-2xl shadow-md"
                  />
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2 text-center">אתחול לבטן</h3>
                <p className="text-muted-foreground font-body text-sm mb-5 text-center">ספר המתכונים הדיגיטלי למערכת עיכול רגועה</p>

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
                        <p key={i} className="text-muted-foreground font-body text-sm leading-relaxed mb-3 text-right">
                          {p}
                        </p>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  onClick={() => setRecipeExpanded(!recipeExpanded)}
                  className="flex items-center gap-1 text-primary font-display font-semibold text-sm mb-5 hover:underline mx-auto"
                >
                  {recipeExpanded ? "הסתר" : "לפרטים נוספים"}
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${recipeExpanded ? "rotate-180" : ""}`} />
                </button>

                <div className="flex items-baseline justify-center gap-3">
                  <span className="font-display text-3xl font-bold text-primary">79 ש״ח</span>
                  <span className="text-sm text-muted-foreground font-body">מחיר השקה</span>
                  <span className="text-sm text-muted-foreground line-through font-body">120 ש״ח</span>
                </div>
              </div>

              <div className="bg-gradient-purple px-6 py-4 text-center">
                <p className="font-display text-sm md:text-base font-bold text-white">
                  מי שרוכש תוכנית ליווי מקבל את החוברת בחינם!
                </p>
              </div>
            </div>
          </motion.div>

          {/* Product B: Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="rounded-3xl bg-muted border border-gray-100 shadow-lg overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
              <div className="p-6 md:p-8 flex-1">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2 text-center">קלפי העצמה ושינוי</h3>
                <p className="text-muted-foreground font-body text-sm mb-5 text-center">ליצירת קשר רגוע ובריא יותר עם אוכל</p>

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
                        <p key={i} className="text-muted-foreground font-body text-sm leading-relaxed mb-3 text-right">
                          {p}
                        </p>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  onClick={() => setCardsExpanded(!cardsExpanded)}
                  className="flex items-center gap-1 text-primary font-display font-semibold text-sm mb-5 hover:underline mx-auto"
                >
                  {cardsExpanded ? "הסתר" : "לפרטים נוספים"}
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${cardsExpanded ? "rotate-180" : ""}`} />
                </button>

                <div className="flex items-baseline justify-center gap-3 mb-6">
                  <span className="font-display text-3xl font-bold text-primary">119 ש״ח</span>
                  <span className="text-sm text-muted-foreground font-body">מחיר השקה</span>
                  <span className="text-sm text-muted-foreground line-through font-body">149 ש״ח</span>
                </div>

                {/* Card carousel */}
                <div className="relative max-w-[280px] mx-auto">
                  <button onClick={() => goCard(-1)} className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-10 z-10 w-9 h-9 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-muted-foreground hover:text-primary transition-all active:scale-95" aria-label="הקודם">
                    <ChevronRight className="h-4 w-4" />
                  </button>
                  <button onClick={() => goCard(1)} className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-10 z-10 w-9 h-9 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-muted-foreground hover:text-primary transition-all active:scale-95" aria-label="הבא">
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={cardSlide}
                      src={cardExamples[cardSlide]}
                      alt={`דוגמה לקלף ${cardSlide + 1}`}
                      className="w-full h-64 md:h-80 object-contain rounded-2xl"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    />
                  </AnimatePresence>
                  <div className="flex justify-center gap-2 mt-4">
                    {cardExamples.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCardSlide(i)}
                        className={`rounded-full transition-all duration-300 ${
                          i === cardSlide ? "bg-primary w-6 h-2.5" : "bg-gray-200 w-2.5 h-2.5 hover:bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
