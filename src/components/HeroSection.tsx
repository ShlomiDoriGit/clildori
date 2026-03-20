import { motion } from "framer-motion";
import heroImage from "@/assets/clil-hero.png";

const HeroSection = () => (
  <section id="hero" className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-b from-secondary to-background">
    <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 px-6 py-20 lg:py-0">
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: -30, filter: "blur(6px)" }}
        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="w-full lg:w-1/2 flex justify-center"
      >
        <img
          alt="כליל דורי - תזונאית קלינית"
          className="w-72 lg:w-[420px] rounded-3xl object-cover shadow-[0_20px_60px_-10px_hsl(262_88%_51%/0.18)]"
          src={heroImage}
        />
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full lg:w-1/2 text-right"
      >
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] mb-6">
          כליל דורי
          <br />
          <span className="text-primary">תזונאית קלינית</span>
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 font-display font-bold leading-relaxed mb-4">
          תזונה מותאמת <span className="text-primary">גוף ונפש</span>
        </p>
        <p className="text-base md:text-lg text-muted-foreground font-body leading-relaxed max-w-lg">
          מלווה נשים וגברים בתהליכי ירידה במשקל, איזון מטבולי ושיפור אורח חיים, תוך התייחסות להיבטים רגשיים והתנהגותיים של האכילה.
        </p>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
