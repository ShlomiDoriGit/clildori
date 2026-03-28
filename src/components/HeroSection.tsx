import { motion } from "framer-motion";
import profileHero from "@/assets/profile-hero.jpeg";
import heroBg from "@/assets/hero-bg-new.jpeg";

const HeroSection = () => (
  <section
    id="hero"
    className="relative overflow-hidden"
    style={{
      backgroundImage: `url(${heroBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div className="container mx-auto px-6 py-12 md:py-16 lg:py-24 flex flex-col md:flex-row items-center gap-8 md:gap-16">
      {/* Profile Image — shows on top on mobile */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="shrink-0 order-first md:order-last"
      >
        <img
          src={profileHero}
          alt="כליל דורי - תזונאית קלינית"
          className="w-[200px] sm:w-[220px] md:w-64 lg:w-80 rounded-3xl object-cover shadow-2xl"
          style={{ aspectRatio: "3/4" }}
        />
      </motion.div>

      {/* Text — right side in RTL */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 min-w-0 text-right"
      >
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.15] mb-2 md:mb-3">
          כליל דורי
        </h1>
        <p className="font-display text-lg sm:text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6">
          תזונאית קלינית
        </p>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-body leading-relaxed max-w-xl">
          מלווה נשים וגברים בתהליכי ירידה במשקל, איזון מטבולי ושיפור אורח חיים, תוך התייחסות להיבטים רגשיים והתנהגותיים של האכילה.
        </p>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
