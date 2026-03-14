import { motion } from "framer-motion";
import heroImg from "@/assets/clil-hero.png";
import logo from "@/assets/logo.png";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
    <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 px-6 py-20 lg:py-0">
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full lg:w-1/2 flex justify-center"
      >
        <img
          src={heroImg}
          alt="כליל דורי - תזונאית קלינית"
          className="w-80 lg:w-[480px] rounded-3xl object-cover shadow-2xl"
        />
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full lg:w-1/2 text-right"
      >
        <img src={logo} alt="לוגו כליל דורי" className="w-28 mb-8" />
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
          כליל דורי
          <br />
          <span className="text-primary">תזונה מותאמת גוף ונפש</span> ✨
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed mb-10 max-w-lg mr-0 ml-auto lg:ml-0 lg:mr-0">
          מלווה נשים וגברים בתהליכי ירידה במשקל ואיזון מטבולי, עם דגש על הפן הרגשי.
        </p>
        <a
          href="https://wa.me/972559272658"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg transition-all hover:shadow-xl hover:scale-105"
        >
          דברו איתי בוואטסאפ
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
