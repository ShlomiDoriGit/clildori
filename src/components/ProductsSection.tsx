import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, ChevronDown, ShoppingBag } from "lucide-react";
import recipeBook from "@/assets/recipe-book.png";
import cardsCoverNew from "@/assets/cards-cover-new.png";
import cardSlide13 from "@/assets/card-slide-13.png";
import cardSlide17 from "@/assets/card-slide-17.png";

const cardExamples = [cardsCoverNew, cardSlide13, cardSlide17];

const recipeDetails = 'חוברת מתכונים דיגיטלית שנבנתה במיוחד עבור אנשים עם רגישות לגלוטן וללקטוז. כוללת מגוון מתכונים קלים להכנה, ללא גלוטן, דל לקטוז, ללא סוכר וללא ממתיקים מלאכותיים. מאפשרת לבצע ריסט תזונתי לגוף, להפחית עומס ממערכת העיכול ולהרגיש קלילים יותר.';

const cardsDetails = 'סט קלפים שנוצר במיוחד עבור נשים המתמודדות עם מערכת יחסים מורכבת עם אוכל. כל קלף כולל מסר מעודד, נקודת מבט חדשה או שאלה להתבוננות, המסייעים להתחבר מחדש לגוף ולרגשות. כלי ליצירת מרחב של מודעות וחמלה עצמית.';

const ProductsSection = () => {
  const [cardSlide, setCardSlide] = useState(0);

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

        {/* Products — stacked cards matching design */}
        <div className="max-w-5xl mx-auto space-y-8">

          {/* Product A: Recipe Book — Image left, text right (RTL) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-gradient-to-br from-purple-50 via-white to-purple-50/50 border border-purple-100 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col md:flex-row-reverse items-center gap-6 p-6 md:p-10">
              {/* Text */}
              <div className="flex-1 text-right">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">אתחול לבטן</h3>
                <p className="text-muted-foreground font-body text-sm mb-4">ספר המתכונים הדיגיטלי למערכת עיכול רגועה</p>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-5">
                  {recipeDetails}
                </p>
                <div className="flex items-baseline gap-3 mb-3 justify-end">
                  <span className="text-sm text-muted-foreground line-through font-body">120 ש״ח</span>
                  <span className="text-sm text-muted-foreground font-body">מחיר השקה:</span>
                  <span className="font-display text-3xl font-bold text-primary">79 ש״ח</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-gradient-purple text-white font-display font-bold text-sm rounded-full px-6 py-3 shadow-md hover:shadow-lg transition-all"
                >
                  ליצירת קשר לרכישה
                </motion.button>
              </div>

              {/* Image */}
              <div className="shrink-0">
                <motion.img
                  whileHover={{ scale: 1.03, rotate: 1 }}
                  transition={{ duration: 0.3 }}
                  src={recipeBook}
                  alt="אתחול לבטן - חוברת מתכונים"
                  className="w-[180px] sm:w-[220px] md:w-[240px] h-auto object-contain rounded-2xl shadow-lg"
                />
              </div>
            </div>

            <div className="bg-gradient-purple px-6 py-3.5 text-center">
              <p className="font-display text-sm md:text-base font-bold text-white">
                מי שרוכש תוכנית ליווי מקבל את החוברת בחינם!
              </p>
            </div>
          </motion.div>

          {/* Product B: Cards — Image right, text left (RTL) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-3xl bg-gradient-to-br from-purple-50 via-white to-purple-50/50 border border-purple-100 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-10">
              {/* Text */}
              <div className="flex-1 text-right order-1 md:order-2">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">קלפי העצמה ושינוי</h3>
                <p className="text-muted-foreground font-body text-sm mb-4">ליצירת קשר רגוע ובריא יותר עם אוכל</p>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-5">
                  {cardsDetails}
                </p>
                <div className="flex items-baseline gap-3 mb-3 justify-end">
                  <span className="text-sm text-muted-foreground line-through font-body">149 ש״ח</span>
                  <span className="text-sm text-muted-foreground font-body">מחיר השקה:</span>
                  <span className="font-display text-3xl font-bold text-primary">119 ש״ח</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-gradient-purple text-white font-display font-bold text-sm rounded-full px-6 py-3 shadow-md hover:shadow-lg transition-all"
                >
                  לרכישת הסט בקליק
                </motion.button>
              </div>

              {/* Card carousel */}
              <div className="shrink-0 order-2 md:order-1 relative w-[200px] sm:w-[240px] md:w-[260px]">
                <button onClick={() => goCard(-1)} className="absolute top-1/2 -translate-y-1/2 -right-5 z-10 w-8 h-8 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-muted-foreground hover:text-primary transition-all active:scale-95" aria-label="הקודם">
                  <ChevronRight className="h-4 w-4" />
                </button>
                <button onClick={() => goCard(1)} className="absolute top-1/2 -translate-y-1/2 -left-5 z-10 w-8 h-8 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-muted-foreground hover:text-primary transition-all active:scale-95" aria-label="הבא">
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
                <div className="flex justify-center gap-2 mt-3">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
