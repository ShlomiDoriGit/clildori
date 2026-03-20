import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import recipeBook from "@/assets/recipe-cover.png";
import cardExample1 from "@/assets/card-example-1.jpg";
import cardExample2 from "@/assets/card-example-2.jpg";
import cardExample3 from "@/assets/card-example-3.jpg";

const cardExamples = [cardExample1, cardExample2, cardExample3];

const ProductsSection = () => {
  const [cardSlide, setCardSlide] = useState(0);

  const goCard = (dir: number) =>
    setCardSlide((prev) => (prev + dir + cardExamples.length) % cardExamples.length);

  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-16"
        >
          מוצרים
        </motion.h2>

        {/* Product A: Recipe Book */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-24"
        >
          <div className="rounded-3xl bg-card shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
              {/* Image */}
              <div className="w-full md:w-2/5 flex justify-center shrink-0">
                <img
                  src={recipeBook}
                  alt="אתחול לבטן - חוברת מתכונים"
                  className="w-full max-w-[260px] md:max-w-[280px] h-auto object-contain rounded-2xl"
                />
              </div>
              {/* Text */}
              <div className="flex-1 text-right">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                  אתחול לבטן
                </h3>
                <p className="text-muted-foreground font-body text-sm mb-4">
                  ספר המתכונים הדיגיטלי למערכת עיכול רגועה
                </p>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                  זו דרך פשוטה להתחיל לאכול בצורה שמיטיבה עם הגוף, תומכת בהרגעת מערכת העיכול ומסייעת להפחית נפיחות ואי נוחות, תוך שמירה על תזונה מגוונת, טעימה ומאוזנת ביומיום. 🥗✨
                </p>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="font-display text-2xl font-bold text-primary">79 ש״ח</span>
                  <span className="text-sm text-muted-foreground font-body">מחיר השקה</span>
                  <span className="text-sm text-muted-foreground line-through font-body">120 ש״ח</span>
                </div>
              </div>
            </div>
            {/* Special offer */}
            <div className="bg-primary/8 border-t border-primary/15 px-8 py-5 text-center">
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
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-3xl bg-card shadow-lg overflow-hidden p-8 md:p-12">
            <div className="text-right mb-8">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                קלפי חיזוק
              </h3>
              <p className="text-muted-foreground font-body text-sm mb-4">
                ליצירת קשר רגוע ובריא יותר עם אוכל
              </p>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                סט קלפים שנוצר במיוחד עבור נשים המתמודדות עם מערכת יחסים מורכבת עם אוכל, מחשבות סביב אכילה, או תחושות של אשמה ושליטה. הקלפים נועדו להעניק רגע של עצירה, התבוננות וחיזוק פנימי בתוך היום יום. כל קלף כולל מסר מעודד, נקודת מבט חדשה או שאלה להתבוננות...
              </p>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-display text-2xl font-bold text-primary">119 ש״ח</span>
                <span className="text-sm text-muted-foreground font-body">מחיר השקה</span>
                <span className="text-sm text-muted-foreground line-through font-body">149 ש״ח</span>
              </div>
            </div>

            {/* Card gallery slider */}
            <div className="relative max-w-xs mx-auto">
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
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === cardSlide ? "bg-primary w-5" : "bg-muted-foreground/30 w-2"
                    }`}
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
