import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpeg";
import heroBg from "@/assets/hero-footer-bg.jpeg";

const HeroSection = () => (
  <section
    id="hero"
    className="relative overflow-hidden"
    style={{
      backgroundImage: `url(${heroBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center top",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div className="container mx-auto flex flex-row items-center gap-6 md:gap-16 px-6 py-12 md:py-16 lg:py-24" style={{ flexWrap: "nowrap" }}>
      {/* Right: Text (RTL so this appears first) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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

      {/* Left: Image — always side-by-side, scales down on mobile */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="shrink-0"
      >
        <img
          src={profilePhoto}
          alt="כליל דורי - תזונאית קלינית"
          className="w-[120px] sm:w-[180px] md:w-64 lg:w-72 rounded-3xl object-cover shadow-xl"
          style={{ aspectRatio: "3/4" }}
        />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
