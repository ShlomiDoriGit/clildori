import { motion } from "framer-motion";
import secondaryImg from "@/assets/clil-secondary.png";

const products = [
  {
    title: "ריסט לבטן",
    description: "ספר מתכונים דיגיטלי ללא גלוטן, סוכר ולקטוז.",
    price: "79 ש״ח",
    label: "מחיר השקה",
  },
  {
    title: "קלפי חיזוק",
    description: "סט קלפים לקשר בריא ורגוע עם אוכל.",
    price: "119 ש״ח",
    label: "מחיר השקה",
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
        מוצרים דיגיטליים
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
        {products.map((product, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="rounded-3xl bg-card p-8 shadow-sm hover:shadow-lg transition-shadow"
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">{product.title}</h3>
            <p className="text-muted-foreground font-body mb-6 leading-relaxed">{product.description}</p>
            <div className="flex items-baseline gap-2">
              <span className="text-sm text-muted-foreground font-body">{product.label}</span>
              <span className="font-display text-2xl font-bold text-primary">{product.price}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Secondary image */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <img
          src={secondaryImg}
          alt="כליל דורי"
          className="w-full max-w-2xl rounded-3xl object-cover shadow-xl"
        />
      </motion.div>
    </div>
  </section>
);

export default ProductsSection;
