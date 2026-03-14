import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import card1 from "@/assets/card-1.jpg";
import card2 from "@/assets/card-2.jpg";

const products = [
  {
    title: "ליווי תזונתי",
    description:
      "סדרת פגישות ייעוץ תזונתי אונליין. בניית תפריט תזונתי בהתאם למצב הבריאותי, בדיקות הדם, ההעדפות ואורח החיים. התאמת פרוטוקול תוספי תזונה, ליווי ותמיכה שוטפת בין המפגשים וכלים פרקטיים לשינוי הרגלים לאורך זמן.",
    price: null,
    label: "לפרטים נוספים",
    cta: true,
    note: "ניתן לקבל החזר של עד 80% מביטוחי הבריאות הפרטיים 💸",
    image: null,
  },
  {
    title: "ריסט לבטן",
    description:
      "ספר המתכונים הדיגיטלי למערכת עיכול רגועה. ללא גלוטן, ללא לקטוז, ללא סוכר וללא ממתיקים מלאכותיים. חוברת מתכונים קלים להכנה, המבוססים על חומרי גלם איכותיים וידידותיים למערכת העיכול.",
    price: "79 ש״ח",
    label: "מחיר השקה",
    fullPrice: "120 ש״ח",
    cta: false,
    image: card1,
  },
  {
    title: "קלפי חיזוק",
    description:
      "סט קלפים לקשר רגוע ובריא יותר עם אוכל. סט קלפים שנוצר במיוחד עבור נשים המתמודדות עם מערכת יחסים מורכבת עם אוכל. כל קלף כולל מסר מעודד, נקודת מבט חדשה או שאלה להתבוננות.",
    price: "119 ש״ח",
    label: "מחיר השקה",
    fullPrice: "149 ש״ח",
    cta: false,
    image: card2,
  },
];

const ProductsSection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-16"
      >
        מוצרים ושירותים
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="rounded-3xl bg-card overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col"
          >
            {product.image && (
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-52 object-cover"
                loading="lazy"
              />
            )}
            <div className="p-8 flex flex-col flex-1">
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                {product.title}
              </h3>
              <p className="text-muted-foreground font-body mb-6 leading-relaxed text-sm flex-1">
                {product.description}
              </p>

              {product.note && (
                <p className="text-xs text-primary font-body mb-4 bg-primary/5 rounded-xl p-3">
                  {product.note}
                </p>
              )}

              {product.price ? (
                <div className="flex items-baseline gap-2 mb-4">
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
              ) : null}

              {product.cta && (
                <a
                  href="https://wa.me/972559272658"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-primary-foreground font-semibold transition-all hover:scale-105 mt-auto"
                >
                  <MessageCircle className="h-4 w-4" />
                  {product.label}
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
