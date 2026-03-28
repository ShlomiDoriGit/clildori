import { motion } from "framer-motion";
import heroBg from "@/assets/רקע תחילת אתר.jpeg";
import profileImg from "@/assets/כליל דורי תמונת פרופיל.jpeg";

const HeroSection = () => (
  <section
    id="hero"
    className="relative overflow-hidden"
    style={{
      backgroundImage: `url('${heroBg}')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div className="container mx-auto px-6 py-12 md:py-16 lg:py-24 flex flex-col-reverse md:flex-row-reverse items-center gap-8 md:gap-16">
      
      {/* אזור התמונה - במובייל יופיע למעלה מעל הטקסט */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
      >
        <img
          src={profileImg}
          alt="כליל דורי - תזונאית קלינית"
          className="w-4/5 md:w-full max-w-md rounded-2xl shadow-2xl object-cover"
        />
      </motion.div>

      {/* אזור הטקסט */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full md:w-1/2 text-center md:text-right"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight mb-6">
          הדרך לבריאות ואיזון מתחילה כאן
        </h1>
        <p className="text-lg md:text-xl text-gray-800 font-body mb-8 leading-relaxed">
          ליווי תזונתי מותאם אישית לשיפור איכות החיים, ירידה במשקל ויצירת קשר בריא ורגוע יותר עם האוכל והגוף שלך.
        </p>
        <div className="flex justify-center md:justify-end">
          <button
            onClick={() => window.open("https://wa.me/972559272658", "_blank")}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg transition-all transform hover:scale-105"
          >
            בואו נדבר
          </button>
        </div>
      </motion.div>

    </div>
  </section>
);

export default HeroSection;
