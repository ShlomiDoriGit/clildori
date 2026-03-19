import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ChevronRight, ChevronLeft, Check } from "lucide-react";
import card2 from "@/assets/card-2.jpg";
import recipeBook from "@/assets/recipe-book.png";
import cardExample1 from "@/assets/card-example-1.jpg";
import cardExample2 from "@/assets/card-example-2.jpg";
import cardExample3 from "@/assets/card-example-3.jpg";

const products = [
  {
    title: "ליווי תזונתי",
    subtitle: "תזונה מותאמת גוף ונפש",
    description: `נעים להכיר, אני כליל דורי תזונאית קלינית – תזונה מותאמת גוף ונפש

אני מלווה נשים וגברים בתהליכי ירידה במשקל, איזון מטבולי ושיפור אורח חיים, תוך התייחסות להיבטים רגשיים והתנהגותיים של האכילה.

הליווי שאני מציעה הינו תהליך מובנה, אישי ומבוסס מחקר, שמטרתו לייצר שינוי עמוק ויציב לאורך זמן.`,
    points: [
      "סדרת פגישות ייעוץ תזונתי אונליין.",
      "בניית תפריט תזונתי בהתאם למצב הבריאותי, בדיקות הדם, ההעדפות ואורח החיים.",
      "התאמת פרוטוקול תוספי תזונה מותאם מטרות ומבוסס ספרות עדכנית.",
      "ליווי ותמיכה שוטפת בין המפגשים, כולל מענה לשאלות והתאמות לפי הצורך.",
      "מתן כלים פרקטיים לשינוי הרגלים, ויסות אכילה, ניהול סטרס ושמירה על התוצאות לאורך זמן.",
    ],
    note: "רבים לא מודעים לכך, אבל בחלק גדול מביטוחי הבריאות הפרטיים ניתן לקבל החזר של עד 80% מעלות הייעוץ התזונתי אצל דיאטנית קלינית.\n\nכלומר, ייתכן שחלק משמעותי מההשקעה בתהליך התזונתי שלכם יכול לחזור אליכם דרך הביטוח. מומלץ לבדוק מול חברת הביטוח או סוכן הביטוח האם הפוליסה שלכם כוללת כיסוי לייעוץ תזונתי במסגרת שירותים פרא רפואיים.",
    price: null,
    label: "לפרטים נוספים",
    cta: true,
    image: null,
    specialOffer: null,
    gallery: null,
  },
  {
    title: "אתחול לבטן",
    subtitle: "ספר המתכונים הדיגיטלי למערכת עיכול רגועה",
    description:
      "חוברת מתכונים דיגיטלית שנבנתה במיוחד עבור אנשים עם רגישות לגלוטן וללקטוז, וגם עבור מי שמסתובב יום יום עם נפיחות, גזים או יציאות לא סדירות ולא מצליח להבין למה.\n\nהחוברת כוללת מתכונים קלים להכנה, המבוססים על חומרי גלם איכותיים וידידותיים למערכת העיכול. ללא גלוטן, דל לקטוז, ללא סוכר וללא ממתיקים מלאכותיים.\n\nמעבר לרעיונות לארוחות יומיומיות, החוברת מאפשרת לבצע מגשר סטרס תזונתי לגוף, להפחית עומס ממערכת העיכול, להרגיע את הבטן ולהתחיל להרגיש קלילים יותר.\n\nזו דרך פשוטה להתחיל לאכול בצורה שעושה טוב לגוף, תוך מתכונים שמרגיעים את מערכת העיכול ומסייעים להפחתת תסמינים.",
    points: null,
    note: null,
    price: "79 ש״ח",
    label: "מחיר השקה",
    fullPrice: "120 ש״ח",
    cta: false,
    image: recipeBook,
    specialOffer: "מי שרוכש תוכנית ליווי מקבל את החוברת מתכונים בחינם!",
    gallery: null,
  },
  {
    title: "קלפי חיזוק",
    subtitle: "ליצירת קשר רגוע ובריא יותר עם אוכל",
    description:
      "סט קלפים שנוצר במיוחד עבור נשים המתמודדות עם מערכת יחסים מורכבת עם אוכל. כל קלף כולל מסר מעודד, נקודת מבט חדשה או שאלה להתבוננות, שמאפשר להתחבר מחדש לגוף, לרגשות ולצרכים האמיתיים.\n\nהקלפים מיועדים לשימוש ככלי אישי, כחלק מתהליך או כרגעי התבוננות במהלך היום. הקלפים יכולים לשמש ככלי לפתוח מערכת יחסים רגועה ואינטימית יותר עם אוכל.",
    points: null,
    note: null,
    price: "119 ש״ח",
    label: "מחיר השקה",
    fullPrice: "149 ש״ח",
    cta: false,
    image: card2,
    specialOffer: null,
    gallery: [cardExample1, cardExample2, cardExample3],
  },
];

const ProductsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const goTo = (dir: number) => {
    setExpanded(false);
    setGalleryIndex(0);
    setActiveIndex((prev) => (prev + dir + products.length) % products.length);
  };

  const product = products[activeIndex];

  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-16"
        >
          מוצרים ושירותים
        </motion.h2>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {products.map((p, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveIndex(i);
                setExpanded(false);
                setGalleryIndex(0);
              }}
              className={`px-5 py-2.5 rounded-full font-display font-semibold text-sm transition-all ${
                i === activeIndex
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80"
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* Card */}
        <div className="relative max-w-2xl mx-auto">
          <button
            onClick={() => goTo(-1)}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-14 z-10 w-10 h-10 rounded-full bg-card shadow-md flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            aria-label="הקודם"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <button
            onClick={() => goTo(1)}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-14 z-10 w-10 h-10 rounded-full bg-card shadow-md flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            aria-label="הבא"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="rounded-3xl bg-card overflow-hidden shadow-lg"
            >
              {product.image && (
                <div className="w-full flex items-center justify-center bg-gradient-to-b from-primary/5 to-transparent p-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-w-[280px] md:max-w-[320px] w-full h-auto object-contain rounded-2xl"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-8 md:p-10">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {product.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm mb-5">
                  {product.subtitle}
                </p>

                <AnimatePresence mode="wait">
                  {!expanded ? (
                    <motion.div
                      key="summary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <p className="text-muted-foreground font-body leading-relaxed text-sm mb-6 line-clamp-3">
                        {product.description}
                      </p>
                      <button
                        onClick={() => setExpanded(true)}
                        className="text-primary font-semibold text-sm hover:underline font-body"
                      >
                        לפרטים נוספים
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="details"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-muted-foreground font-body leading-relaxed text-sm mb-5 whitespace-pre-line">
                        {product.description}
                      </p>

                      {product.points && (
                        <div className="mb-5">
                          <p className="font-display font-bold text-foreground mb-3">
                            מה כוללת תוכנית הליווי:
                          </p>
                          <ul className="space-y-2">
                            {product.points.map((point, j) => (
                              <li
                                key={j}
                                className="flex items-start gap-2 text-muted-foreground font-body text-sm"
                              >
                                <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {product.note && (
                        <p className="text-xs text-primary font-body bg-primary/5 rounded-xl p-4 mb-5 leading-relaxed whitespace-pre-line">
                          {product.note}
                        </p>
                      )}

                      <button
                        onClick={() => setExpanded(false)}
                        className="text-muted-foreground font-body text-sm hover:underline"
                      >
                        הסתר פרטים
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Special offer */}
                {product.specialOffer && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-6 rounded-2xl bg-primary/10 border border-primary/20 p-5 text-center"
                  >
                    <p className="font-display text-lg md:text-xl font-bold text-primary">
                      {product.specialOffer}
                    </p>
                  </motion.div>
                )}

                {/* Gallery for cards */}
                {product.gallery && (
                  <div className="mt-6">
                    <p className="font-display font-bold text-foreground mb-3 text-sm">
                      דוגמאות לקלפים:
                    </p>
                    <div className="relative">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={galleryIndex}
                          src={product.gallery[galleryIndex]}
                          alt={`דוגמה לקלף ${galleryIndex + 1}`}
                          className="w-full h-48 md:h-64 object-contain rounded-xl"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </AnimatePresence>
                      <div className="flex justify-center gap-2 mt-3">
                        {product.gallery.map((_, gi) => (
                          <button
                            key={gi}
                            onClick={() => setGalleryIndex(gi)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              gi === galleryIndex
                                ? "bg-primary w-5"
                                : "bg-muted-foreground/30"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Price */}
                {product.price && (
                  <div className="flex items-baseline gap-2 mt-6 mb-4">
                    <span className="text-sm text-muted-foreground font-body">
                      {product.label}
                    </span>
                    <span className="font-display text-2xl font-bold text-primary">
                      {product.price}
                    </span>
                    {product.fullPrice && (
                      <span className="text-sm text-muted-foreground line-through font-body">
                        {product.fullPrice}
                      </span>
                    )}
                  </div>
                )}

                {/* CTA */}
                {product.cta && (
                  <a
                    href="https://wa.me/972559272658"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-primary-foreground font-semibold transition-all hover:scale-105 mt-4"
                  >
                    <MessageCircle className="h-4 w-4" />
                    {product.label}
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {products.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveIndex(i);
                  setExpanded(false);
                  setGalleryIndex(0);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === activeIndex
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/30"
                }`}
                aria-label={`עבור לכרטיסיה ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
