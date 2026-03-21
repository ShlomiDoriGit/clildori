import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpeg";

const HeroSection = () => (
  <section id="hero" className="relative bg-cream overflow-hidden">
    <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16 px-6 py-16 lg:py-24">
      {/* Left: Image */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full lg:w-5/12 flex justify-center"
      >
        <img
          src={profilePhoto}
          alt="כליל דורי - תזונאית קלינית"
          className="w-64 md:w-72 lg:w-80 rounded-3xl object-cover shadow-xl"
          style={{ aspectRatio: "3/4" }}
        />
      </motion.div>

      {/* Right: Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full lg:w-7/12 text-right"
      >
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.15] mb-3">
          כליל דורי
        </h1>
        <p className="font-display text-xl md:text-2xl font-bold text-primary mb-6">
          תזונאית קלינית
        </p>
        <p className="text-base md:text-lg text-muted-foreground font-body leading-relaxed max-w-xl">
          מלווה נשים וגברים בתהליכי ירידה במשקל, איזון מטבולי ושיפור אורח חיים, תוך התייחסות להיבטים רגשיים והתנהגותיים של האכילה.
        </p>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
