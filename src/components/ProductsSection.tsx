import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, ChevronDown, ChevronUp, ShoppingBag } from "lucide-react";
import recipeBook from "@/assets/recipe-cover.jpg";
import guideCover from "@/assets/guide-5kg-cover.jpg";
import cardsCoverNew from "@/assets/cards-title.jpg";
import cardSlide13 from "@/assets/card-slide-13.png";
import cardSlide17 from "@/assets/card-slide-17.png";

const cardExamples = [cardsCoverNew, cardSlide13, cardSlide17];

const guideShort = `בניתי את המדריך מתוך הניסיון שצברתי בטיפול במאות מטופלים לאורך השנים, במטרה להפוך את הצעד הראשון לפשוט, ברור וקל ליישום.

המדריך בנוי כתוכנית הדרגתית בת שמונה שבועות, שתלווה אותך צעד אחר צעד בדרך לשינוי שאפשר להתמיד בו. הוא יעזור לך לעשות סדר באכילה, לחזק את תחושת השובע, לתמוך באיזון המטבולי ולהטמיע הרגלים שמקדמים ירידה במשקל ושיפור הבריאות לאורך זמן.`;

const guideFull = `הכלים במדריך פשוטים וישימים, ואפשר להתחיל ליישם אותם כבר מהיום הראשון, ללא הכנה מיוחדת ומבלי לשנות את כל השגרה בבת אחת. כך אפשר לבנות בהדרגה מסגרת פעולה שמתאימה לאורח החיים שלך ולהניע שינוי משמעותי, בלי לספור קלוריות ובלי צעדים קיצוניים.`;

const recipeShort = 'חוברת מתכונים דיגיטלית שנבנתה במיוחד עבור אנשים עם רגישות לגלוטן וללקטוז, וגם עבור מי שמתמודד ביום יום עם נפיחות, גזים או יציאות לא סדירות, אבל עדיין לא הצליח לזהות מה גורם לזה.';

const recipeFull = `החוברת כוללת מגוון מתכונים קלים להכנה, המבוססים על חומרי גלם ידידותיים למערכת העיכול, ללא גלוטן, דל לקטוז, ללא סוכר וללא ממתיקים מלאכותיים, כך שתוכלו ליהנות מאוכל טעים, מזין ומשביע מבלי להכביד על הגוף.

בנוסף, תמצאו בה המלצות לחומרי גלם שנבחרו בקפידה, עם דגש על איכות, תנאי גידול וייצור, ובדיקות לניקיון מרעלים ומתכות כבדות.

מעבר למתכונים פרקטיים לשגרה, החוברת מאפשרת לבצע אתחול תזונתי לגוף בדרך פשוטה ומאוזנת, להרגיע את הבטן ולהתחיל להרגיש קלילים יותר, תוך שמירה על תזונה מגוונת, טעימה ומזינה ביום יום.`;

const cardsShort = 'סט קלפים שנוצר במיוחד עבור נשים המתמודדות עם מערכת יחסים מורכבת עם אוכל, מחשבות סביב אכילה, תחושות של אשמה, צורך בשליטה, או קושי להקשיב לגוף ברגעים של עומס רגשי.';

const cardsFull = `כל קלף מציע מסר מחזק, שאלה להתבוננות או נקודת מבט חדשה, שמטרתם לעצור לרגע את האוטומט, להתחבר לגוף ולרגשות, ולבחור את הצעד הבא מתוך מודעות, ולא מתוך אשמה או ביקורת עצמית.

הקלפים נועדו ליצור מרחב קטן של נשימה בתוך היום יום, ולעזור לך לפתח מערכת יחסים רגועה, קשובה ומיטיבה יותר עם האוכל ועם הגוף.

זהו כלי שיכול להשתלב כחלק מתהליך אישי, ברגעים שבהם את רוצה לעצור, לנשום ולהתחבר לעצמך מחדש, או ככלי תומך בתוך תהליך טיפולי. דרך פשוטה ונגישה להזכיר לעצמך ששינוי אמיתי לא מתחיל משליטה חזקה יותר, אלא מהקשבה, חמלה והבנה עמוקה יותר של הצרכים שלך.`;

const ProductsSection = () => {
  const [cardSlide, setCardSlide] = useState(0);
  const [guideExpanded, setGuideExpanded] = useState(false);
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

        <div className="max-w-5xl mx-auto space-y-8">

          {/* Product 0: Digital guide — leading product */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-gradient-to-br from-purple-50 via-white to-purple-50/50 border-2 border-primary/25 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex flex-col md:flex-row-reverse items-center gap-6 p-6 md:p-10">
              <div className="flex-1 text-right">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">לרדת את ה־5 ק״ג הראשונים</h3>
                <p className="text-muted-foreground font-body text-sm mb-4">מדריך דיגיטלי פרקטי לירידה במשקל ב־8 שבועות.</p>
                <p className="text-muted-foreground font-body text-sm leading-[1.75] whitespace-pre-line mb-4">
                  {guideShort}
                </p>
                {guideExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-muted-foreground font-body text-sm leading-[1.75] whitespace-pre-line mb-4">
                      {guideFull}
                    </p>
                  </motion.div>
                )}
                <button
                  onClick={() => setGuideExpanded(!guideExpanded)}
                  className="flex items-center gap-1 text-primary font-body text-xs font-semibold mb-5 hover:underline transition-all mr-auto"
                  style={{ direction: "ltr" }}
                >
                  {guideExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                  {guideExpanded ? "הצג פחות" : "המשך קריאה"}
                </button>
                <div className="flex flex-col items-end gap-1 mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-muted-foreground font-body">מחיר מלא:</span>
                    <span className="text-base text-muted-foreground line-through font-body">230 ש״ח</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-muted-foreground font-body">מחיר השקה:</span>
                    <span className="font-display text-3xl font-bold text-primary">149 ש״ח</span>
                  </div>
                </div>
                <div className="flex justify-end mt-2">
                  <motion.a
                    href="https://wa.me/972559272658"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 bg-gradient-purple text-white font-display font-bold text-sm rounded-full px-8 py-3 shadow-md hover:shadow-lg transition-all"
                  >
                    לרכישה לחצו
                  </motion.a>
                </div>
              </div>

              <div className="shrink-0">
                <motion.img
                  whileHover={{ scale: 1.03, rotate: 1 }}
                  transition={{ duration: 0.3 }}
                  src={guideCover}
                  alt="לרדת את ה־5 ק״ג הראשונים - מדריך דיגיטלי מעשי"
                  className="w-[240px] sm:w-[290px] md:w-[320px] max-w-full h-auto object-contain rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </motion.div>

          {/* Product A: Recipe Book */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-gradient-to-br from-purple-50 via-white to-purple-50/50 border border-purple-100 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col md:flex-row-reverse items-center gap-6 p-6 md:p-10">
              <div className="flex-1 text-right">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">אתחול לבטן</h3>
                <p className="text-muted-foreground font-body text-sm mb-3">ספר המתכונים הדיגיטלי למערכת עיכול רגועה.</p>
                <p className="text-xs text-primary/80 font-body font-semibold mb-4">ללא גלוטן, דל לקטוז, ללא סוכר וללא ממתיקים מלאכותיים.</p>
                <p className="text-muted-foreground font-body text-sm leading-[1.75] mb-4">
                  {recipeShort}
                </p>
                {recipeExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-muted-foreground font-body text-sm leading-[1.75] whitespace-pre-line mb-4">
                      {recipeFull}
                    </p>
                  </motion.div>
                )}
                <button
                  onClick={() => setRecipeExpanded(!recipeExpanded)}
                  className="flex items-center gap-1 text-primary font-body text-xs font-semibold mb-5 hover:underline transition-all mr-auto"
                  style={{ direction: "ltr" }}
                >
                  {recipeExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                  {recipeExpanded ? "הצג פחות" : "המשך קריאה"}
                </button>
                <div className="flex flex-col items-end gap-1 mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-muted-foreground font-body">מחיר מלא:</span>
                    <span className="text-base text-muted-foreground line-through font-body">120 ש״ח</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-muted-foreground font-body">מחיר השקה:</span>
                    <span className="font-display text-3xl font-bold text-primary">79 ש״ח</span>
                  </div>
                </div>
                <div className="flex justify-end mt-2">
                  <motion.a
                    href="https://wa.me/972559272658"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 bg-gradient-purple text-white font-display font-bold text-sm rounded-full px-8 py-3 shadow-md hover:shadow-lg transition-all"
                  >
                    לרכישה לחצו
                  </motion.a>
                </div>
              </div>

              <div className="shrink-0">
                <motion.img
                  whileHover={{ scale: 1.03, rotate: 1 }}
                  transition={{ duration: 0.3 }}
                  src={recipeBook}
                  alt="אתחול לבטן - חוברת מתכונים"
                  className="w-[240px] sm:w-[290px] md:w-[320px] max-w-full h-auto object-contain rounded-2xl shadow-lg"
                />
              </div>
            </div>

            <div className="bg-gradient-purple px-6 py-3.5 text-center">
              <p className="font-display text-sm md:text-base font-bold text-white">
                מי שרוכש תוכנית ליווי מקבל את החוברת בחינם!
              </p>
            </div>
          </motion.div>

          {/* Product B: Cards */}
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
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">קלפי העצמה ושינוי</h3>
                <p className="text-muted-foreground font-body text-sm mb-4">לקשר רגוע ובריא יותר עם אוכל.</p>
                <p className="text-muted-foreground font-body text-sm leading-[1.75] mb-4">
                  {cardsShort}
                </p>
                {cardsExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-muted-foreground font-body text-sm leading-[1.75] whitespace-pre-line mb-4">
                      {cardsFull}
                    </p>
                  </motion.div>
                )}
                <button
                  onClick={() => setCardsExpanded(!cardsExpanded)}
                  className="flex items-center gap-1 text-primary font-body text-xs font-semibold mb-5 hover:underline transition-all mr-auto"
                  style={{ direction: "ltr" }}
                >
                  {cardsExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                  {cardsExpanded ? "הצג פחות" : "המשך קריאה"}
                </button>
                <div className="flex flex-col items-end gap-1 mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-muted-foreground font-body">מחיר מלא:</span>
                    <span className="text-base text-muted-foreground line-through font-body">280 ש״ח</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-muted-foreground font-body">מחיר השקה:</span>
                    <span className="font-display text-3xl font-bold text-primary">249 ש״ח</span>
                  </div>
                </div>
                <div className="flex justify-end mt-2">
                  <motion.a
                    href="https://wa.me/972559272658"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 bg-gradient-purple text-white font-display font-bold text-sm rounded-full px-8 py-3 shadow-md hover:shadow-lg transition-all"
                  >
                    לרכישה לחצו
                  </motion.a>
                </div>
              </div>

              {/* Card carousel — one large card at a time */}
              <div className="shrink-0 order-2 md:order-1 relative w-[260px] sm:w-[320px] md:w-[360px] max-w-full">
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
                    className="w-full h-[190px] sm:h-[232px] md:h-[262px] object-contain rounded-2xl"
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
